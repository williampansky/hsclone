import React from 'react';
import PropTypes from 'prop-types';
import HasBoon from 'components/mechanics/HasBoon';
import HasEnergyShield from 'components/mechanics/HasEnergyShield';
import HasGuardBackground from 'components/mechanics/HasGuardBackground';
import HasGuardForeground from 'components/mechanics/HasGuardForeground';
import HasOnslaught from 'components/mechanics/HasOnslaught';
import IsConcealed from 'components/mechanics/IsConcealed';
import IsDeadPoof from 'components/animations/minions/IsDeadPoof';
import IsDisabled from 'components/mechanics/IsDisabled';
import Minion from 'components/minion/MinionV2';
import MinionInteraction from 'components/interactions/minions/MinionInteraction';
import PLAYER_BOARDS from 'enums/playerBoards.enums';
import SPELLTYPE from 'enums/spellType.enums';
import usePrevious from 'components/hooks/usePrevious';
import WillExpire from 'components/mechanics/WillExpire';

export default function BoardSlot({
  G,
  ctx,
  moves,
  isActive,
  canDrop,
  data,
  board,
  index,
  onClick,
  render,
  yourID,
  theirID
}) {
  const [wasAttacked, setWasAttacked] = React.useState(false);
  const { selectedMinionIndex, attackedMinionIndex } = G;
  const { killMinion } = moves;
  const {
    canAttack,
    canBeAttackedByMinion,
    canBeAttackedByPlayer,
    canBeAttackedBySpell,
    canBeAttackedByWarcry,
    canBeBuffed,
    canBeDebuffed,
    canBeExpired,
    canBeHealed,
    canBeReturned,
    canBeSacrificed,
    canBeStolen,
    canReceiveEnergyShield,
    canReceiveGuard,
    canReceiveOnslaught,
    currentAttack,
    currentHealth,
    hasBoon,
    hasEnergyShield,
    hasGuard,
    hasOnslaught,
    isAttacking,
    isAttackingMinionIndex,
    isAttackingPlayer,
    isConcealed,
    isCursed,
    isDisabled,
    isDead,
    minionData,
    totalAttack,
    totalHealth,
    willExpire,
    willExpireIn
  } = data;

  const playerID = board === PLAYER_BOARDS[1] ? yourID : theirID;
  const previousCurrentHealth = usePrevious(currentHealth);

  const animateWasAttacked = React.useCallback(
    currentHealth => {
      if (isActive && board === PLAYER_BOARDS[2]) {
        currentHealth < previousCurrentHealth && setWasAttacked(true);
        return setTimeout(() => {
          setWasAttacked(false);
        }, 510);
      } else if (!isActive && board === PLAYER_BOARDS[1]) {
        currentHealth < previousCurrentHealth && setWasAttacked(true);
        return setTimeout(() => {
          setWasAttacked(false);
        }, 510);
      }
    },
    [board, isActive, previousCurrentHealth]
  );

  React.useEffect(() => {
    animateWasAttacked(currentHealth);
  }, [currentHealth, animateWasAttacked]);

  const KillMinion = React.useCallback(
    index => {
      return setTimeout(() => {
        killMinion(playerID, data, index);
      }, 900);
    },
    [playerID, data, killMinion]
  );

  React.useEffect(() => {
    isDead && KillMinion(index);
  }, [index, isDead, KillMinion]);

  function handleIsAttackingClass(bool) {
    if (bool) return '--animate-attack';
  }

  return (
    <div
      data-file="board-slots/BoardSlot"
      data-slot={index}
      data-render={render}
      className={[
        'board-slot',
        data === null ? 'is-empty' : '',
        data !== null ? 'has-minion' : '',
        data === null && !canDrop ? 'cannot-drop-minion' : '',
        isDead ? 'is-dead' : '',
        hasGuard ? 'has-guard' : '',
        G.selectedCardObject[yourID] !== null &&
        G.selectedCardObject[yourID].spellType !== SPELLTYPE[2]
          ? 'cannot-drop-minion'
          : '',
        wasAttacked ? '--was-attacked' : '',
        isAttacking ? '--is-attacking' : '',
        isAttackingPlayer === true ? `target__other_player` : '',
        isAttackingMinionIndex !== null
          ? `target__slot-${isAttackingMinionIndex}`
          : ''
      ].join(' ')}
      onClick={onClick}
    >
      {/* interactions layer */}
      {minionData && (
        <MinionInteraction
          G={G}
          ctx={ctx}
          moves={moves}
          isActive={isActive}
          board={board}
          yourID={yourID}
          theirID={theirID}
          index={index}
          render={render}
          data={data}
          canAttack={canAttack}
          canBeAttackedByMinion={canBeAttackedByMinion}
          canBeAttackedByPlayer={canBeAttackedByPlayer}
          canBeAttackedBySpell={canBeAttackedBySpell}
          canBeAttackedByWarcry={canBeAttackedByWarcry}
          canBeBuffed={canBeBuffed}
          canBeHealed={canBeHealed}
          canBeDebuffed={canBeDebuffed}
          canBeExpired={canBeExpired}
          canBeReturned={canBeReturned}
          canBeSacrificed={canBeSacrificed}
          canBeStolen={canBeStolen}
          canReceiveEnergyShield={canReceiveEnergyShield}
          canReceiveGuard={canReceiveGuard}
          canReceiveOnslaught={canReceiveOnslaught}
          hasBoon={hasBoon}
          hasEnergyShield={hasEnergyShield}
          hasGuard={hasGuard}
          hasOnslaught={hasOnslaught}
          isAttacking={isAttacking}
          isConcealed={isConcealed}
          isCursed={isCursed}
          isDisabled={isDisabled}
          totalAttack={totalAttack}
          totalHealth={totalHealth}
          willExpire={willExpire}
        />
      )}

      {/* mechanics */}
      {minionData && hasBoon && <HasBoon />}
      {minionData && hasEnergyShield && <HasEnergyShield />}
      {minionData && hasGuard && <HasGuardForeground />}
      {minionData && hasOnslaught && <HasOnslaught />}
      {minionData && isConcealed && <IsConcealed />}
      {minionData && isDisabled && <IsDisabled />}
      {minionData && willExpire && <WillExpire count={willExpireIn} />}

      {/* visible minion component */}
      {minionData && (
        <Minion
          currentAttack={currentAttack}
          currentHealth={currentHealth}
          data={minionData}
          slot={index}
          totalHealth={totalHealth}
        />
      )}

      {minionData && hasGuard && <HasGuardBackground />}
      {isDead && <IsDeadPoof />}
    </div>
  );
}

BoardSlot.propTypes = {
  G: PropTypes.object,
  ctx: PropTypes.object,
  moves: PropTypes.object,
  isActive: PropTypes.bool,
  index: PropTypes.number,
  render: PropTypes.bool,
  board: PropTypes.string,
  canDrop: PropTypes.bool,
  onClick: PropTypes.func,
  theirID: PropTypes.string,
  yourID: PropTypes.string,
  data: PropTypes.object,
  canAttack: PropTypes.bool,
  canBeAttackedByMinion: PropTypes.bool,
  canBeAttackedByPlayer: PropTypes.bool,
  canBeAttackedBySpell: PropTypes.bool,
  canBeAttackedByWarcry: PropTypes.bool,
  canBeBuffed: PropTypes.bool,
  canBeHealed: PropTypes.bool,
  canBeDebuffed: PropTypes.bool,
  canBeExpired: PropTypes.bool,
  canBeReturned: PropTypes.bool,
  canBeSacrificed: PropTypes.bool,
  canBeStolen: PropTypes.bool,
  canReceiveEnergyShield: PropTypes.bool,
  canReceiveOnslaught: PropTypes.bool,
  hasBoon: PropTypes.bool,
  hasEnergyShield: PropTypes.bool,
  hasGuard: PropTypes.bool,
  isAttacking: PropTypes.bool,
  isConcealed: PropTypes.bool,
  isCursed: PropTypes.bool,
  isDisabled: PropTypes.bool,
  hasOnslaught: PropTypes.bool,
  totalAttack: PropTypes.bool,
  totalHealth: PropTypes.bool,
  willExpire: PropTypes.bool
};

BoardSlot.defaultProps = {
  data: {
    canAttack: false,
    canBeAttackedByMinion: false,
    canBeAttackedByPlayer: false,
    canBeAttackedBySpell: false,
    canBeAttackedByWarcry: false,
    currentAttack: 0,
    currentHealth: 0,
    hasGuard: false,
    minionData: null,
    totalAttack: 0,
    totalHealth: 0
  }
};
