import { useSelector } from 'react-redux';
import avatars from '~/config/avatars.config';
import css from '~/styles/game/components/board.scss';
import TheirAvatar from './TheirAvatar';
import TheirBoardPlayerArea from '~/components/game/TheirBoardPlayArea';

export default function TheirBoard() {
  const theirHealth = useSelector(s => s.theirHealth);
  const { username, hero, id } = useSelector(s => s.them);
  const avatar = hero && avatars[hero.toLowerCase()];

  return (
    <div data-file="TheirBoard" className={css.TheirBoard}>
      <TheirAvatar health={theirHealth} src={avatar} />
      <TheirBoardPlayerArea />
    </div>
  );
}
