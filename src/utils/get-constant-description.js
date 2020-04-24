import CONSTANTS from 'enums/CONSTANTS.json';
import exists from './element.exists';

/**
 * Returns the description of the provided parsed constant.
 * @param {String} symbol Symbol to match
 * @param {String} json CONSTANTS.json
 */
export default function getConstantDescription(symbol, json = CONSTANTS) {
  if (!exists(symbol) || !exists(json[symbol])) return symbol;
  return json[symbol].description;
}
