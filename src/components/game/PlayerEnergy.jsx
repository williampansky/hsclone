import css from '~/styles/game/game.scss';
import { useSelector } from 'react-redux';

export default function PlayerEnergyValue() {
  const { currentEnergy, totalAvailableEnergy } = useSelector(
    s => s.playerEnergy
  );

  return (
    <div className={css.PlayerEnergy} data-file="PlayerEnergy">
      {currentEnergy}/{totalAvailableEnergy}
    </div>
  );
}
