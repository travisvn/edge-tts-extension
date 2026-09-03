export type TextPosition = {
  node: Text;
  offset: number;
};

export type ReadingSegment = {
  element: HTMLElement;
  start: number;
  end: number;
};

export type ReadingDocument = {
  text: string;
  positions: Array<TextPosition | null>;
  segments: ReadingSegment[];
};

const READABLE_SELECTOR = [
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'p', 'li', 'blockquote', 'pre', 'figcaption', 'td', 'th', 'dd', 'dt',
].join(',');

const EXCLUDED_SELECTOR = [
  'script', 'style', 'noscript', 'template', 'svg', 'canvas',
  'nav', 'aside', 'form', 'button', 'textarea', 'select',
  '[aria-hidden="true"]', '[hidden]', '[inert]', '#tts-control-panel',
  '[contenteditable="true"]', '[role="button"]', '[role="navigation"]',
].join(',');

function isVisible(element: HTMLElement): boolean {
  const style = window.getComputedStyle(element);
  if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') {
    return false;
  }
  const rect = element.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0;
}

function chooseRoot(): HTMLElement {
  const candidates = Array.from(
    document.querySelectorAll<HTMLElement>('article, main, [role="main"]'),
  ).filter(isVisible);

  if (candidates.length === 0) return document.body;

  const best = candidates.reduce((best, candidate) =>
    (candidate.innerText?.length || 0) > (best.innerText?.length || 0) ? candidate : best,
  );
  const bodyLength = document.body.innerText?.length || 0;
  return (best.innerText?.length || 0) >= Math.min(400, bodyLength * 0.2)
    ? best
    : document.body;
}

function appendElementText(
  element: HTMLElement,
  output: string[],
  positions: Array<TextPosition | null>,
): void {
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = (node as Text).parentElement;
      if (!parent || parent.closest(EXCLUDED_SELECTOR) || !isVisible(parent)) {
        return NodeFilter.FILTER_REJECT;
      }
      return node.textContent?.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });

  let needsSpace = output.length > 0 && !/\s$/.test(output[output.length - 1]);
  let node = walker.nextNode() as Text | null;
  while (node) {
    const value = node.data;
    for (let offset = 0; offset < value.length; offset += 1) {
      const character = value[offset];
      if (/\s/.test(character)) {
        needsSpace = output.length > 0 && !/\s$/.test(output[output.length - 1]);
      } else {
        if (needsSpace) {
          output.push(' ');
          positions.push(null);
          needsSpace = false;
        }
        output.push(character);
        positions.push({ node, offset });
      }
    }
    node = walker.nextNode() as Text | null;
  }
}

/** Extract readable blocks while retaining a character-to-DOM mapping. */
export function buildReadingDocument(): ReadingDocument {
  const root = chooseRoot();
  let elements = Array.from(root.querySelectorAll<HTMLElement>(READABLE_SELECTOR))
    .filter((element) => !element.closest(EXCLUDED_SELECTOR) && isVisible(element));

  // A list item can contain a paragraph and a table cell can contain several
  // readable blocks. Keep the outer semantic block so all direct text is
  // retained without appending its descendants a second time.
  elements = elements.filter((element) =>
    !elements.some((candidate) => candidate !== element && candidate.contains(element)),
  );

  // Pages made from plain divs/spans need a conservative fallback.
  if (elements.length === 0) {
    elements = Array.from(root.querySelectorAll<HTMLElement>('div'))
      .filter((element) => !element.closest(EXCLUDED_SELECTOR) && isVisible(element))
      .filter((element) => !element.querySelector('div') && Boolean(element.innerText.trim()));
  }

  const output: string[] = [];
  const positions: Array<TextPosition | null> = [];
  const segments: ReadingSegment[] = [];

  for (const element of elements) {
    const start = output.length;
    appendElementText(element, output, positions);
    const end = output.length;
    if (end > start) {
      segments.push({ element, start, end });
      output.push('\n');
      positions.push(null);
    }
  }

  return { text: output.join('').trimEnd(), positions, segments };
}

export function findSegmentAtPoint(
  readingDocument: ReadingDocument,
  target: EventTarget | null,
): ReadingSegment | undefined {
  const element = target instanceof Element ? target.closest<HTMLElement>(READABLE_SELECTOR) : null;
  return readingDocument.segments.find((segment) => segment.element === element);
}

export function findTextOffsetAtPoint(
  readingDocument: ReadingDocument,
  segment: ReadingSegment,
  x: number,
  y: number,
): number {
  let node: Node | null = null;
  let offset = 0;
  const doc = document as Document & {
    caretPositionFromPoint?: (x: number, y: number) => { offsetNode: Node; offset: number } | null;
    caretRangeFromPoint?: (x: number, y: number) => Range | null;
  };
  const position = doc.caretPositionFromPoint?.(x, y);
  const range = !position ? doc.caretRangeFromPoint?.(x, y) : null;
  node = position?.offsetNode || range?.startContainer || null;
  offset = position?.offset ?? range?.startOffset ?? 0;

  if (!node || node.nodeType !== Node.TEXT_NODE || !segment.element.contains(node)) {
    return segment.start;
  }

  const mappedIndex = readingDocument.positions.findIndex((mapped, index) =>
    index >= segment.start && index < segment.end && mapped?.node === node && mapped.offset >= offset,
  );
  const rawIndex = mappedIndex >= 0 ? mappedIndex : segment.start;
  const localText = readingDocument.text.slice(segment.start, rawIndex);
  const wordStart = localText.search(/\S+$/);
  return wordStart >= 0 ? segment.start + wordStart : rawIndex;
}

export function findTextOffsetForDomPosition(
  readingDocument: ReadingDocument,
  node: Node,
  offset: number,
  fallback: number,
): number {
  if (node.nodeType === Node.TEXT_NODE) {
    const exact = readingDocument.positions.findIndex((mapped) =>
      mapped?.node === node && mapped.offset >= offset,
    );
    if (exact >= 0) return exact;

    for (let index = readingDocument.positions.length - 1; index >= 0; index -= 1) {
      const mapped = readingDocument.positions[index];
      if (mapped?.node === node) return index + 1;
    }
  }

  // Element-boundary selections are less common. Compare DOM order to find
  // the first mapped character at or after the selection point.
  try {
    const selectionPoint = document.createRange();
    selectionPoint.setStart(node, offset);
    selectionPoint.collapse(true);
    for (let index = 0; index < readingDocument.positions.length; index += 1) {
      const mapped = readingDocument.positions[index];
      if (!mapped) continue;
      const character = document.createRange();
      character.setStart(mapped.node, mapped.offset);
      character.collapse(true);
      if (selectionPoint.compareBoundaryPoints(Range.START_TO_START, character) <= 0) {
        return index;
      }
    }
  } catch {
    // A stale selection can reference a node removed by a dynamic page.
  }
  return fallback;
}

export function rangeForOffsets(
  readingDocument: ReadingDocument,
  start: number,
  end: number,
): Range | null {
  let first: TextPosition | null = null;
  let last: TextPosition | null = null;
  for (let index = start; index < end; index += 1) {
    const mapped = readingDocument.positions[index];
    if (mapped && !first) first = mapped;
    if (mapped) last = mapped;
  }
  if (!first || !last) return null;

  const range = document.createRange();
  range.setStart(first.node, first.offset);
  range.setEnd(last.node, Math.min(last.offset + 1, last.node.length));
  return range;
}
