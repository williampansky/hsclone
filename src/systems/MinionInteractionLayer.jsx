import MinionCanAttack from './interactions/MinionCanAttack';

export default function CardInteractionLayer({
  children,
  data,
  index,
  interactions
}) {
  switch (interactions) {
    case 'can-attack':
      return <MinionCanAttack children={children} data={data} index={index} />;

    default:
      return <>{children}</>;
  }
}
