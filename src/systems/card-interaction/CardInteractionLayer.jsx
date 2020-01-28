import CardIsPlayable from './interactions/CardIsPlayable';

export default function CardInteractionLayer({
  children,
  data,
  index,
  interactions
}) {
  switch (interactions) {
    case 'is-playable':
      return <CardIsPlayable children={children} data={data} index={index} />;

    default:
      return <>{children}</>;
  }
}
