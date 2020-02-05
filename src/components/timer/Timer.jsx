import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { add, subtract } from 'mathjs';
// import css from './timer.module.scss';

export default function Timer(props) {
  const {
    G,
    ctx,
    moves,
    events,
    // reset,
    // undo,
    // redo,
    // step,
    // log,
    // gameID,
    playerID,
    // gameMetadata,
    isActive
    // isMultiplayer,
    // isConnected,
    // credentials
  } = props;

  const [{ turnTimer }, setTurnTimer] = useState({ turnTimer: 5000 });

  // useEffect(() => {
  //   if (isActive) {
  //     console.log('setInterval');
  //     const interval = setInterval(() => {
  //       setTurnTimer({ turnTimer: subtract(turnTimer, 1000) });
  //     }, 1000);

  //     if (turnTimer <= 0) {
  //       return () => {
  //         console.log('clearInterval');
  //         clearInterval(interval);
  //         events.endTurn();
  //         setTurnTimer({ turnTimer: 5000 });
  //       };
  //     }
  //   }
  // }, [isActive, turnTimer]);

  // const [seconds, setSeconds] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSeconds(seconds => seconds + 1);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  // const initTurnTimer = React.useCallback(endTurn => {
  //   const interval = setInterval((endTurn) => {
  //     console.log('startInterval')
  //     const timeLeft = subtract(turnTimer, 1000);
  //     setTurnTimer({ turnTimer: timeLeft });

  //     if (turnTimer <= 0) {
  //       console.log('clearInterval')
  //       clearInterval(interval);
  //       return endTurn();
  //     }
  //   }, 1000);
  // }, []);

  // React.useEffect(() => {
  //   // console.log(playerID, isActive);
  //   isActive && initTurnTimer(endTurn);
  // }, [isActive]);

  return props ? <Component isActive={isActive} turnTimer={turnTimer} /> : null;
}

const Component = styled.div`
  position: fixed;
  top: auto;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  user-select: none;
  background: yellow;
  width: ${props => percentage(props.turnTimer, 750)}%;
  height: 2px;
  transform: ${props => (props.isActive ? 'translateY(0)' : 'translateY(2px)')};
  transition: 300ms ease-in-out;
  transition-property: width, transform;
  z-index: 500;
`;

function percentageDivider(source) {
  const timerSource = source;
  const timerString = timerSource.toString();
  const split = timerString.split('');
  const remove = split.slice(0, 3);
  const newTimerString = remove.join().replace(/(,)/g, '');
  const newTimer = Number(newTimerString);
  return newTimer;
}

function percentage(num, divider) {
  // e.g. 75000 becomes 750
  // const timerSource = num;
  // const timerString = timerSource.toString();
  // const split = timerString.split('');
  // const remove = split.slice(0, 3);
  // const newTimerString = remove.join().replace(/(,)/g, '');
  // const newTimer = Number(newTimerString);
  // const divider = Number(
  //   num
  //     .toString()
  //     .split('')
  //     .slice(0, 3)
  //     .join()
  //     .replace(/(,)/g, '')
  // );

  return num / divider;
}
