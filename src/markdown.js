// Inline markdown used by the note preview.
export function renderInline(text) {
  return text
    // Strikethrough should need a double tilde: ~~text~~.
    .replace(/~~(.*?)~~/g, '<del>$1</del>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`(.+?)`/g, '<code>$1</code>');
}
