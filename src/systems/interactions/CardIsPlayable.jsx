import React from 'react';
import css from 'styles/interactions/card-interactions.module.scss';

export default function CardIsPlayable({ onClick }) {
  // const [isSelected, setIsSelected] = React.useState(false);
  // const dataID = data && data.id;
  // const selectedID = selectedCard && selectedCard.id;

  // function dispatchSelectCard(selected, object) {
  //   return !selected ? dispatch(selectCard(object)) : dispatch(deselectCard());
  // }

  // function handleClick(event, object = data, selected = isSelected) {
  //   event.preventDefault();
  //   return dispatchSelectCard(selected, object);
  // }

  // useEffect(() => {
  //   dataID === selectedID ? setIsSelected(true) : setIsSelected(false);
  // }, [dataID, selectedID]);

  return (
    <div
      className={css['card-is-playable']}
      data-is-playable={true}
      onClick={onClick}
    />
  );
}
