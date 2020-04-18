/**
 * Parses HTML and replaces the variable text symbol with the provided value.
 * @param {String} string HTML string to parse
 * @param {String} value Value to replace
 */
export default function replaceDynamicText(string, value) {
  if (!string || !value) return;
  const newString = string.replace('%NUM%', value);
  return newString;
}
