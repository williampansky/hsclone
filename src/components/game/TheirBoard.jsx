import css from '~/styles/game/components/board.scss';
import TheirAvatar from './TheirAvatar';
import TheirBoardPlayerArea from '~/components/game/TheirBoardPlayArea';

export default function TheirBoard() {
  return (
    <div data-file="TheirBoard" className={css.TheirBoard}>
      <TheirAvatar src="https://i.ytimg.com/vi/k-dqTDIURfg/hqdefault.jpg" />
      <TheirBoardPlayerArea />
    </div>
  );
}
