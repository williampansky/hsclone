import YourBoardPlayerArea from './YourBoardPlayArea';
import css from '~/styles/game/components/board.scss';
import YourAvatar from './YourAvatar';
import { useSelector } from 'react-redux';
import avatars from '~/config/avatars.config';

export default function YourBoard() {
  const yourHealth = useSelector(s => s.yourHealth);
  const { username, hero, id } = useSelector(s => s.you);
  const avatar = hero && avatars[hero.toLowerCase()];

  return (
    <div data-file="YourBoard" className={css.YourBoard}>
      <YourBoardPlayerArea />
      <YourAvatar health={yourHealth} src={avatar} />
    </div>
  );
}
