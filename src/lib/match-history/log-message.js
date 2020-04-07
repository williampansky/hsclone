import timestamp from './timestamp';
import logMinionAttackedMinionMessage from './minion-attacked-minion.log';
import logPlayerAttackedMinionMessage from './player-attacked-minion.log';
import logPlayerAttackedPlayerMessage from './player-attacked-player.log';
import logMinionAttackedPlayerMessage from './minion-attacked-player.log';
import logCastTargetedSpellAtMinionMessage from './cast-targeted-spell-at-minion.log';
import logKillMinionMessage from './kill-minion.log';
import logCastTargetedSpellAtPlayerMessage from './cast-targeted-spell-at-player.log';
import logPlayCardMessage from './play-card.log';

const logMessage = (G, ctx, action, player = null, index = null) => {
  const { turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);
  let message;

  switch (action) {
    case 'attackMinion':
      message = logMinionAttackedMinionMessage(
        G,
        currentPlayer,
        otherPlayer,
        index
      );
      break;

    case 'attackMinionWithPlayer':
      message = logPlayerAttackedMinionMessage(
        G,
        currentPlayer,
        otherPlayer,
        index
      );
      break;

    case 'attackPlayer':
      message = logMinionAttackedPlayerMessage(G, currentPlayer, otherPlayer);
      break;

    case 'attackPlayerWithPlayer':
      message = logPlayerAttackedPlayerMessage(G, currentPlayer, otherPlayer);
      break;

    case 'castTargetedSpell-minion':
      message = logCastTargetedSpellAtMinionMessage(
        G,
        currentPlayer,
        otherPlayer,
        index
      );
      break;

    case 'castTargetedSpell-player':
      message = logCastTargetedSpellAtPlayerMessage(
        G,
        currentPlayer,
        otherPlayer
      );
      break;

    case 'endTurn':
      message = `Player ${currentPlayer}'s turn ended.`;
      break;

    case 'killMinion':
      message = logKillMinionMessage(G, player, index);
      break;

    case 'matchStart':
      message = `Match started.`;
      break;

    case 'playGlobalSpellCard':
    case 'playMinionCard':
    case 'playWeaponCard':
      message = logPlayCardMessage(G, currentPlayer, action);
      break;

    case 'startTurn':
      message = `Player ${currentPlayer}'s turn has begun.`;
      break;

    default:
      return;
  }

  G.matchHistory.push(`\
    <span class="timestamp">[${timestamp()}]</span>
    <span class="message">${message}</span>\
  `);
};

export default logMessage;
