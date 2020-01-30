import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deselectCard, selectCard } from '~/features/yourHand/yourHand.slice';
import css from '~/styles/game/interactions/minion-interactions.scss';

export default function MinionCanAttack({ children, data, slot }) {
  const [{ isSelected }, setIsSelected] = useState({ isSelected: false });

  function handleClick(event, slot, obj) {
    event.preventDefault();
    return !isSelected
      ? setIsSelected({ isSelected: true })
      : setIsSelected({ isSelected: false });
  }

  return (
    <div
      className={[
        css['minion--interaction_layer'],
        css['minion--can_attack'],
        isSelected ? css['minion--is_attacking'] : ''
      ].join(' ')}
      data-is-selected={isSelected}
      onClick={event => handleClick(event, slot, data)}
    >
      {children}
    </div>
  );
}
