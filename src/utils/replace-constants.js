import CONSTANTS from 'enums/CONSTANTS.json';

/**
 * Parses string and replaces the symbol with the relative constant.
 * @param {String} string HTML string to parse
 * @param {String} symbol Symbol to target and replace
 */
export default function replaceConstant(string, json = CONSTANTS) {
  return string.replace(/%(.*?)%/g, m => json[m].name);
}
