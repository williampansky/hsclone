import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deselectCard, selectCard } from '~/features/yourHand/yourHand.slice';
import css from '~/styles/game/interactions/minion-interactions.scss';

export default function MinionCanAttack({ children, data, index }) {
  const [isSelected, setIsSelected] = useState(false);

  function handleClick(event, slot, obj) {
    event.preventDefault();
    return !isSelected ? setIsSelected(true) : setIsSelected(false);
  }

  return (
    <div
      className={[
        css.minion_can_attack,
        isSelected ? css.minion_is_attacking : ''
      ].join(' ')}
      data-is-selected={isSelected}
      onClick={event => handleClick(event, index, data)}
    >
      {children}
    </div>
  );
}
