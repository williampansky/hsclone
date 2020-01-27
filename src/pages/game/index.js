import Board from 'components/game/Board';
import Game from 'components/game/Game';
import TheirBoard from 'components/game/TheirBoard';
import TheirHand from 'components/game/TheirHand';
import YourBoard from 'components/game/YourBoard';
import YourHand from 'components/game/YourHand';

export default () => {
  return (
    <Game>
      <TheirHand />
      <Board>
        <TheirBoard />
        <YourBoard />
      </Board>
      <YourHand />
    </Game>
  );
};
