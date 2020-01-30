import css from '~/styles/game/game.scss';
import { useSelector } from 'react-redux';

export default function TheirEnergy() {
  const theirEnergy = useSelector(s => s.theirEnergy);
  const theirEnergyTotal = useSelector(s => s.theirEnergyTotal);

  return (
    <div className={css.PlayerEnergy} data-file="PlayerEnergy">
      {theirEnergy}/{theirEnergyTotal}
    </div>
  );
}
