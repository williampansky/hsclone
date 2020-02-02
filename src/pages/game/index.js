import Board from 'components/game/Board';
import Game from 'components/game/Game';
import TheirBoard from 'components/game/TheirBoard';
import TheirHand from 'components/game/TheirHand';
import YourBoard from 'components/game/YourBoard';
import YourHand from 'components/game/YourHand';
import '~/styles/game/game.scss';
import server from '~/server';
import { useSelector, useDispatch } from 'react-redux';

import {
  setYourHero,
  setYourUsername,
  setYourId,
  setYourConnection
} from '~/features/players/you.slice';
import {
  setTheirHero,
  setTheirUsername,
  setTheirId,
  setTheirConnection
} from '~/features/players/them.slice';

export default function Page() {
  const socket = server();
  const dispatch = useDispatch();
  const { username, hero, id, connected } = useSelector(s => s.you);
  const themObj = useSelector(s => s.them);

  const theirUsername = themObj && themObj.username;
  const theirHero = themObj && themObj.hero;
  const theirId = themObj && themObj.id;
  const theyAreConnected = themObj && themObj.connected;

  // React.useEffect(() => {
  socket.on('start game', payload => {
    const { username, hero } = payload;
    const userId = payload && payload.id;
    console.log(`${username} joined`);

    if (id !== userId) {
      dispatch(setTheirHero(hero));
      dispatch(setTheirUsername(username));
      dispatch(setTheirId(userId));
      dispatch(setTheirConnection(true));
    }
  });

  socket.on('reconnect', () => {
    console.log('You have been reconnected');
    if (username && hero)
      socket.emit('add user', {
        username,
        hero,
        id
      });
  });
  // }, [socket]);

  return connected && theyAreConnected ? (
    <Game>
      <TheirHand />
      <Board>
        <TheirBoard />
        <YourBoard />
      </Board>
      <YourHand />
    </Game>
  ) : null;
}
