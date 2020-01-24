/* tslint:disable */
import React from 'react';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';
import { CardType, CardTypeLabel } from 'enums/CardType';
import { Card as CardInterface } from 'interfaces/Card';
import {
  enableTargeting,
  disableTargeting
} from 'features/targeting/targeting.slice';
import { useDispatch, useSelector } from 'react-redux';
import { Line } from 'react-lineto';
import useDimensions from 'react-use-dimensions';

interface CardTargetingLayerInstance extends CardInterface {
  children: Node;
  index: number;
}

const CardTargetingLayer = ({
  artist,
  attack,
  cardClass,
  collectible,
  cost,
  elite,
  entourage,
  flavor,
  health,
  hideStats,
  howToEarn,
  howToEarnGolden,
  id,
  images,
  mechanics,
  name,
  playRequirements,
  race,
  rarity,
  set,
  sounds,
  spellDamage,
  targetingArrowText,
  text,
  type,
  children,
  index
}: CardTargetingLayerInstance) => {
  const dispatch = useDispatch();
  const [targetX, setTargetX] = React.useState(0);
  const [targetY, setTargetY] = React.useState(0);

  interface RootState {
    targeting: {
      target: {
        width: number;
        height: number;
        top: number;
        left: number;
        x: number;
        y: number;
        right: number;
        bottom: number;
      };
    };
  }

  const targetingState = (state: RootState) => state.targeting;
  const { target } = useSelector(targetingState);

  const cB = React.useCallback(target => {
    setTargetX(target.x);
    setTargetY(target.y);
  }, []);

  React.useEffect(() => {
    target && cB(target);
  }, [target]);

  const [cardRef, { x, y, height, top }] = useDimensions({
    liveMeasure: false
  });

  const callBack = React.useCallback(() => {
    return dispatch(enableTargeting());
  }, [dispatch]);

  React.useEffect(() => {
    callBack();
  }, [callBack]);

  return (
    <Component
      ref={cardRef}
      cardMechanics={mechanics}
      data-file="CardTargetingLayer"
      id={id}
      className={[
        // @ts-ignore
        mechanics && mechanics.includes('CHARGE') ? 'mechanics--has_charge' : ''
      ]}
    >
      {children}

      {targetX && targetY ? (
        <Line
          className="mechanics--target_arrow"
          x0={x && height ? x + height * 0.345 : 0}
          x1={targetX + height * 0.345}
          y0={top ? top : 0}
          y1={targetY + 275}
        />
      ) : null}
    </Component>
  );
};

const defaultProps = {
  name: undefined,
  id: undefined,
  type: 0,
  mechanics: [],
  children: <React.Fragment />
};

CardTargetingLayer.defaultProps = defaultProps;

interface ComponentStyles {
  cardMechanics?: {
    [index: number]: string;
  };
  className: any;
}

// transforms inspired by https://codepen.io/jackrugile/pen/WZGeGM
const Component = styled.div<ComponentStyles>`
  --mechanics: ${p => p.cardMechanics};
  position: relative;
  cursor: pointer;
`;

export default CardTargetingLayer;
