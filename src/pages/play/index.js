import Game from 'components/game/Game';

export default () => {
  return (
    <Game>
      <div data-file="DeckSelection">DeckSelection</div>
      <div data-file="PlaySelection">
        <div data-file="PlayCasual">PlayCasual</div>
        <div data-file="PlayRanked">PlayRanked</div>
      </div>
    </Game>
  );
};
