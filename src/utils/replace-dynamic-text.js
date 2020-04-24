import exists from './element.exists';

/**
 * Parses HTML and replaces the variable text symbol with the provided value.
 * @param {String} string HTML string to parse
 * @param {String} value Value to replace
 */
export default function replaceDynamicText(string, value) {
  if (!exists(string) || !exists(value)) return string;
  if (!string.includes('%NUM%')) return string;
  const newString = string.replace(/%(NUM)%/g, value);
  return newString;
}
