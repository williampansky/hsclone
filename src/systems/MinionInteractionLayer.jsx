import MinionCanAttack from './interactions/MinionCanAttack';

export default function MinionInteractionLayer({ children, data, slot }) {
  const { mechanics } = data;
  console.log(mechanics);

  switch (mechanics) {
    case ['BATTLECRY']:
      return <MinionCanAttack children={children} data={data} slot={slot} />;

    default:
      return <>{children}</>;
  }
}
