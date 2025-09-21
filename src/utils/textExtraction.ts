/**
 * Text extraction utilities for reading from specific positions in the DOM
 */

/**
 * Extract text content from the current selection point to the end of the page
 * @param selectedText The text that was selected by the user
 * @returns The text content from the selection point forward
 */
export function extractTextFromSelection(selectedText: string): string {
  const selection = window.getSelection();

  if (!selection || selection.rangeCount === 0) {
    // Fallback to entire page if no selection
    return document.body.innerText;
  }

  try {
    const range = selection.getRangeAt(0);
    const startContainer = range.startContainer;
    const startOffset = range.startOffset;

    // Find the text content from this point forward
    return extractTextFromPosition(startContainer, startOffset);
  } catch (error) {
    console.warn('Error extracting text from selection:', error);
    // Fallback to entire page
    return document.body.innerText;
  }
}

/**
 * Extract text from a specific DOM position to the end of the page
 * @param startNode The starting DOM node
 * @param startOffset The character offset within the start node
 * @returns The extracted text content
 */
function extractTextFromPosition(startNode: Node, startOffset: number): string {
  const textParts: string[] = [];

  // If we're starting in a text node, get the remaining text from that node
  if (startNode.nodeType === Node.TEXT_NODE) {
    const textContent = startNode.textContent || '';
    const remainingText = textContent.substring(startOffset);
    if (remainingText.trim()) {
      textParts.push(remainingText);
    }
  }

  // Find the container element to start traversing from
  const startElement = startNode.nodeType === Node.TEXT_NODE
    ? startNode.parentElement
    : startNode as Element;

  if (!startElement) {
    return textParts.join('');
  }

  // Create a tree walker to traverse all text nodes from this point forward
  const walker = createTextWalker(startElement);

  // Skip nodes that come before our starting position
  let currentNode = walker.nextNode();
  let foundStartPosition = false;

  while (currentNode) {
    // Check if this is our starting node or comes after it
    if (!foundStartPosition) {
      if (currentNode === startNode) {
        foundStartPosition = true;
        // We already handled the starting text node above
        currentNode = walker.nextNode();
        continue;
      } else if (isNodeAfterPosition(currentNode, startNode, startOffset)) {
        foundStartPosition = true;
      } else {
        currentNode = walker.nextNode();
        continue;
      }
    }

    // Collect text from this node
    const textContent = currentNode.textContent;
    if (textContent && textContent.trim()) {
      textParts.push(textContent);
    }

    currentNode = walker.nextNode();
  }

  // If we haven't found our start position yet, we need to look at sibling elements
  if (!foundStartPosition) {
    return extractTextFromSiblingElements(startElement);
  }

  return textParts.join(' ').replace(/\s+/g, ' ').trim();
}

/**
 * Create a TreeWalker that only visits text nodes in readable content
 */
function createTextWalker(root: Element): TreeWalker {
  return document.createTreeWalker(
    document.body, // Walk the entire body to get everything after our position
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: (node: Node) => {
        const element = node.parentElement;
        if (!element) return NodeFilter.FILTER_REJECT;

        // Skip hidden elements
        const style = window.getComputedStyle(element);
        if (style.display === 'none' || style.visibility === 'hidden') {
          return NodeFilter.FILTER_REJECT;
        }

        // Skip script and style elements
        const tagName = element.tagName.toLowerCase();
        if (['script', 'style', 'noscript'].includes(tagName)) {
          return NodeFilter.FILTER_REJECT;
        }

        // Only include text nodes with actual content
        const text = node.textContent || '';
        if (text.trim().length === 0) {
          return NodeFilter.FILTER_REJECT;
        }

        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );
}

/**
 * Check if a node comes after the specified position in document order
 */
function isNodeAfterPosition(node: Node, startNode: Node, startOffset: number): boolean {
  const range = document.createRange();
  range.setStart(startNode, startOffset);
  range.setEnd(document.body, document.body.childNodes.length);

  try {
    return range.intersectsNode(node);
  } catch (error) {
    // Fallback: use compareDocumentPosition
    const position = startNode.compareDocumentPosition(node);
    return (position & Node.DOCUMENT_POSITION_FOLLOWING) !== 0;
  }
}

/**
 * Extract text from sibling elements and their descendants
 */
function extractTextFromSiblingElements(startElement: Element): string {
  const textParts: string[] = [];
  let currentElement: Element | null = startElement;

  // Traverse sibling elements
  while (currentElement) {
    const walker = createTextWalker(currentElement);
    let textNode = walker.nextNode();

    while (textNode) {
      const textContent = textNode.textContent;
      if (textContent && textContent.trim()) {
        textParts.push(textContent);
      }
      textNode = walker.nextNode();
    }

    currentElement = currentElement.nextElementSibling;
  }

  // Also traverse parent's siblings if we're in a nested structure
  const parent = startElement.parentElement;
  if (parent && parent !== document.body) {
    let parentSibling = parent.nextElementSibling;
    while (parentSibling) {
      const walker = createTextWalker(parentSibling);
      let textNode = walker.nextNode();

      while (textNode) {
        const textContent = textNode.textContent;
        if (textContent && textContent.trim()) {
          textParts.push(textContent);
        }
        textNode = walker.nextNode();
      }

      parentSibling = parentSibling.nextElementSibling;
    }
  }

  return textParts.join(' ').replace(/\s+/g, ' ').trim();
}

/**
 * Fallback function to extract text using a simpler approach
 * This can be used if the advanced DOM traversal fails
 */
export function extractTextFromSelectionSimple(selectedText: string): string {
  const selection = window.getSelection();

  if (!selection || selection.rangeCount === 0) {
    return document.body.innerText;
  }

  try {
    // Get all text content from the page
    const fullText = document.body.innerText;

    // Find the position of the selected text
    const selectionStart = fullText.indexOf(selectedText);

    if (selectionStart !== -1) {
      // Return everything from the selection onward
      return fullText.substring(selectionStart);
    }

    // If we can't find the exact text, return the full page
    return fullText;
  } catch (error) {
    console.warn('Error in simple text extraction:', error);
    return document.body.innerText;
  }
}