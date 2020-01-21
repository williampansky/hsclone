import React from 'react';

// libs
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

// styles
import { Component } from 'components/DebugBar/DebugBarStyles';

// actions
import { addCardToYourHand } from 'features/yourHand/yourHand.slice';

function AddCardToYourHand() {
  const dispatch = useDispatch();
  const yourHand = useSelector(s => s.yourHand);
  const [showMenu, setShowMenu] = React.useState(false);
  const [cardBackground, setCardBackground] = React.useState('cardBackground');
  const [cardName, setCardName] = React.useState('cardName');
  const [cardType, setCardType] = React.useState('cardType');

  function handleClick(event, bool = showMenu) {
    const { target } = event;
    target.blur();
    return bool === false ? setShowMenu(true) : setShowMenu(false);
  }

  const dispatchCard = React.useCallback(
    (name = cardName, type = cardType, background = cardBackground) => {
      function constructCard(name, type, background) {
        return {
          item: {
            name,
            type: type.toUpperCase(),
            id: `${cardType}_${cardName}`,
            background: background
          },
          i: yourHand.length + 1
        };
      }

      return dispatch(addCardToYourHand(constructCard(name, type, background)));
    },
    [cardBackground, cardName, cardType, dispatch, yourHand]
  );

  function submitForm(event) {
    event.preventDefault();
    return dispatchCard();
  }

  return (
    <Component>
      <Button onClick={e => handleClick(e)} type="button">
        Add Card To Your Hand
      </Button>
      <DropdownMenu showMenu={showMenu}>
        <Form onSubmit={e => submitForm(e)}>
          <FormItem>
            Name:{' '}
            <input type="text" onChange={e => setCardName(e.target.value)} />
          </FormItem>
          <FormItem>
            Type:{' '}
            <input type="text" onChange={e => setCardType(e.target.value)} />
          </FormItem>
          <FormItem>
            Background:{' '}
            <input
              type="text"
              onChange={e => setCardBackground(e.target.value)}
            />
          </FormItem>
          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </DropdownMenu>
    </Component>
  );
}

const Button = styled.button`
  cursor: pointer;
  display: inline-block;
  min-width: 45px;
`;

const DropdownMenu = styled.div`
  background: #eee;
  display: ${p => (p.showMenu ? 'block' : 'none')};
  padding: 4px 8px;
  position: absolute;
  top: 100%;
`;

const Form = styled.form`
  & > div + div {
    margin: 4px 0 0;
  }
`;

const FormItem = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;

  input {
    width: 100%;
    margin: 0 0 0 4px;
  }
`;

export default AddCardToYourHand;
