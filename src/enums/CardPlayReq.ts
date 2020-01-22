/**
 * @see https://github.com/HearthSim/hsdata/blob/master/PlayErrors.xml
 */
export enum CardPlayReq {
  /**
   * Target must be a minion.
   */
  REQ_MINION_TARGET,

  /**
   * Target must be friendly.
   */
  REQ_FRIENDLY_TARGET
}

export const CardPlayReqLabel = new Map<number, string>([
  [CardPlayReq.REQ_MINION_TARGET, 'Target must be a minion.'],
  [CardPlayReq.REQ_FRIENDLY_TARGET, 'Target must be friendly.']
]);
