import CONSTANTS from 'enums/CONSTANTS.json';
import exists from './element.exists';

/**
 * Parses string and replaces the symbol with the relative constant.
 * @param {String} string HTML string to parse
 * @param {String} symbol Symbol to target and replace
 */
export default function replaceConstant(string, json = CONSTANTS) {
  if (!exists(string)) return;
  return string.replace(/%(.*?)%/g, m => json[m] && json[m].name);
}
