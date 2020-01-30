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
      return <div data-index={index}>{children}</div>;
  }
}

// prettier-ignore
// abs(($i - ($total - 1) / 2) / ($total - 2) * $offsetRange);
function calcOffset(index, range = 80, total = 10) {
  index = index + 1;
  return Math.abs((index - (total - 1) / 2) / (total - 2) * range);
}

// prettier-ignore
// ($i - ($total - 1) / 2) / ($total - 2) * $rotationRange;
function calcRotate(index, range = 50, total = 10) {
  index = index + 1;
  return (index - (total - 1) / 2) / (total - 2) * range;
}
