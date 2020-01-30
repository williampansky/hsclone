import css from '~/styles/game/components/board.scss';
import TheirAvatar from './TheirAvatar';
import TheirBoardPlayerArea from '~/components/game/TheirBoardPlayArea';
import { useSelector } from 'react-redux';

export default function TheirBoard() {
  const theirHealth = useSelector(s => s.theirHealth);

  return (
    <div data-file="TheirBoard" className={css.TheirBoard}>
      <TheirAvatar
        health={theirHealth}
        src="https://i.ytimg.com/vi/k-dqTDIURfg/hqdefault.jpg"
      />

      <TheirBoardPlayerArea />
    </div>
  );
}
