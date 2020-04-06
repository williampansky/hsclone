export const generateNameHTML = minionData => {
  const { name, rarity } = minionData;

  return `
    <strong 
      class="card-name" 
      data-rarity="${rarity}"
    >
      ${name}
    </strong>
  `;
};
