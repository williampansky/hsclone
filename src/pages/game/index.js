import Board from 'components/game/Board';
import Game from 'components/game/Game';
import TheirBoard from 'components/game/TheirBoard';
import TheirHand from 'components/game/TheirHand';
import YourBoard from 'components/game/YourBoard';
import YourHand from 'components/game/YourHand';
import '~/styles/game/game.scss';
import server from '~/server';
import { useSelector, useDispatch } from 'react-redux';
import { initTheirPlayer } from '~/features/players/them.slice';

export default function Page() {
  const socket = server();
  const dispatch = useDispatch();
  const { username, hero, id, connected } = useSelector(s => s.you);

  dispatch(initTheirPlayer());

  // React.useEffect(() => {
  //   const abortController = new AbortController();

  //   return function cleanup() {
  //     abortController.abort();
  //   };
  // }, [socket]);

  return connected ? (
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
