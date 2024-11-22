export const cleanText = (text: string): string => {
  return text
    // Remove URLs but keep link text
    .replace(/https?:\/\/[^\s<>]*?(?=[.,;:\s<>]|$)/g, '')

    // Remove email addresses
    .replace(/[\w.-]+@[\w.-]+\.\w+/g, '')

    // Remove code blocks
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]*`/g, '')

    // Remove markdown links but keep text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')

    // Remove HTML tags but keep their content
    .replace(/<[^>]+>/g, ' ')

    // Remove multiple spaces, newlines, and tabs
    .replace(/\s+/g, ' ')

    // Remove common syntax characters
    .replace(/[{}[\]#*_|~]/g, ' ')

    // Remove standalone numbers that might be line numbers
    .replace(/^\d+\s*/gm, '')

    // Remove common programming syntax
    .replace(
      /\b(function|const|let|var|return|if|else|for|while|do|switch|case|break|continue|try|catch|finally)\b/g,
      ''
    )

    // Remove common punctuation sequences that might be syntax
    .replace(/[;{}()=+\-/*%]+/g, ' ')

    // Clean up multiple spaces again
    .replace(/\s+/g, ' ')
    .trim()
}
