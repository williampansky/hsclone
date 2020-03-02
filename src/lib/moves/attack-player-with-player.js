import boards from 'lib/state/boards';
import health from 'lib/state/health';
import playerShieldPoints from 'lib/state/player-shield-points';

/**
 * Attacks a player with the current player's selectedMinionObject.
 * @param {{}} G
 * @param {{}} ctx
 */
const attackPlayerWithPlayer = (G, ctx) => {
  const { playerWeapon, turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);

  const ATTACKING_PLAYER_WEAPON = playerWeapon[currentPlayer];
  if (ATTACKING_PLAYER_WEAPON === null) return;
  const WEAPON_AP = ATTACKING_PLAYER_WEAPON.attack;

  // eject if a PLAYER_BEING_ATTACKED's minion has gaurd
  for (let i = 0; i < G.boards[otherPlayer].length; i++) {
    if (G.boards[otherPlayer][i] && G.boards[otherPlayer][i].hasGuard) return;
  }

  // remove shieldPoints first, then health
  if (G.playerShieldPoints[otherPlayer] !== 0) {
    const preDIFF = Math.abs(G.playerShieldPoints[otherPlayer] - WEAPON_AP);

    playerShieldPoints.remove(G, otherPlayer, WEAPON_AP);
    if (G.playerShieldPoints[otherPlayer] === 0)
      health.subtract(G, otherPlayer, preDIFF);
  } else {
    health.subtract(G, otherPlayer, WEAPON_AP);
  }

  // disable all playerCanAttack
  G.playerCanAttack = { '0': false, '1': false };

  // disable all playerIsAttacking
  G.playerIsAttacking = { '0': false, '1': false };

  // disable all playerCanBeAttacked
  G.playerCanBeAttacked = { '0': false, '1': false };

  // then disable opponent minions canBeAttacked
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

export default attackPlayerWithPlayer;