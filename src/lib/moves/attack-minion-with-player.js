import boards from 'lib/state/boards';
import health from 'lib/state/health';
import playerShieldPoints from 'lib/state/player-shield-points';
import logMessage from 'lib/match-history/log-message';

/**
 * Attacks a minion with the currentPlayer's weapon.
 * @param {{}} G
 * @param {{}} ctx
 * @param {index} number
 */
const attackMinionWithPlayer = (G, ctx, index) => {
  const { playerWeapon, playerAttackValue, turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);

  const ATTACKING_PLAYER_VALUE = playerAttackValue[currentPlayer];
  const ATTACKING_PLAYER_WEAPON = playerWeapon[currentPlayer];
  if (ATTACKING_PLAYER_WEAPON === null) return;
  // const WEAPON_AP = ATTACKING_PLAYER_WEAPON.attack;
  const PLAYER_AP = ATTACKING_PLAYER_VALUE;

  const MINION_BEING_ATTACKED = G.boards[otherPlayer][index];
  if (!MINION_BEING_ATTACKED) return;
  const MBA_AP = MINION_BEING_ATTACKED.currentAttack;
  // const MBA_HP = MINION_BEING_ATTACKED.health;

  logMessage(G, ctx, 'attackMinionWithPlayer', null, index);

  // eject if a PLAYER_BEING_ATTACKED's minion has gaurd
  // for (let i = 0; i < G.boards[otherPlayer].length; i++) {
  //   if (G.boards[otherPlayer][i] && G.boards[otherPlayer][i].hasGuard) return;
  // }

  // weapon-specific mechanics
  if (playerWeapon[currentPlayer].id === 'CORE_081a') {
    health.add(G, currentPlayer, 2);
  }

  // remove shieldPoints first, then health
  if (G.playerShieldPoints[currentPlayer] !== 0) {
    const preDIFF = Math.abs(G.playerShieldPoints[currentPlayer] - MBA_AP);

    playerShieldPoints.remove(G, currentPlayer, MBA_AP);
    if (G.playerShieldPoints[currentPlayer] === 0)
      health.subtract(G, currentPlayer, preDIFF);
  } else {
    health.subtract(G, currentPlayer, MBA_AP);
  }

  // if minion has energy shield; remove that first
  if (MINION_BEING_ATTACKED.hasEnergyShield) {
    G.boards[otherPlayer][index].hasEnergyShield = false;
  } else {
    // Subtract PLAYER_AP from MINION_BEING_ATTACKED's currentHealth value
    boards.subtractFromMinionHealth(G, otherPlayer, index, PLAYER_AP);
    boards.killMinionIfHealthIsZero(
      G,
      ctx,
      otherPlayer,
      MINION_BEING_ATTACKED,
      index
    );
  }

  G.playerCanAttack = { '0': false, '1': false };
  G.playerCanBeAttackedByPlayer = { '0': false, '1': false };
  G.playerCanBeAttackedByMinion = { '0': false, '1': false };
  G.playerIsAttacking = { '0': false, '1': false };
  G.playerHasAttacked[currentPlayer] = true;

  // then disable opponent minions can be attacked
  boards.disableAllCanBeAttacked(G, otherPlayer);

  // destroy weapon if health reaches zero
  if (ATTACKING_PLAYER_WEAPON.health === 1) {
    G.playerWeapon[currentPlayer] = null;
  } else {
    // remove health from playerWeapon
    G.playerWeapon[currentPlayer] = {
      ...ATTACKING_PLAYER_WEAPON,
      health: ATTACKING_PLAYER_WEAPON.health - 1
    };
  }
};

export default attackMinionWithPlayer;
