import css from '~/styles/game/game.scss';
import { useSelector } from 'react-redux';

export default function YourEnergy() {
  const yourEnergy = useSelector(s => s.yourEnergy);
  const yourEnergyTotal = useSelector(s => s.yourEnergyTotal);

  return (
    <div className={css.PlayerEnergy} data-file="PlayerEnergy">
      {yourEnergy}/{yourEnergyTotal}
    </div>
  );
}
