import CARDCLASS from 'enums/cardClass.enums';
import CLASS_SKILL_DESCRIPTIONS from 'enums/classSkillDescriptions.enums';

const CLASS_SKILLS = {
  1: {
    name: 'Enhance',
    class: CARDCLASS[1],
    description: CLASS_SKILL_DESCRIPTIONS[1],
    targetingArrowText: 'Attack for 1 damage',
    value: 1
  },
  2: {
    name: 'Sniper Shot',
    class: CARDCLASS[2],
    description: CLASS_SKILL_DESCRIPTIONS[2],
    targetingArrowText: null,
    value: 2
  },
  3: {
    name: 'Lightning Strike',
    class: CARDCLASS[3],
    description: CLASS_SKILL_DESCRIPTIONS[3],
    targetingArrowText: 'Attack for 1 damage',
    value: 1
  },
  4: {
    name: 'Disciple',
    class: CARDCLASS[4],
    description: CLASS_SKILL_DESCRIPTIONS[4],
    targetingArrowText: null,
    value: null
  },
  5: {
    name: 'Mend',
    class: CARDCLASS[5],
    description: CLASS_SKILL_DESCRIPTIONS[5],
    targetingArrowText: 'Heal for for 2 HP',
    value: 2
  },
  6: {
    name: 'Katar',
    class: CARDCLASS[6],
    description: CLASS_SKILL_DESCRIPTIONS[6],
    targetingArrowText: 'Attack for 1 damage',
    value: 1
  },
  7: {
    name: 'Raise Dead',
    class: CARDCLASS[7],
    description: CLASS_SKILL_DESCRIPTIONS[7],
    targetingArrowText: null,
    value: null
  },
  8: {
    name: 'Power Within',
    class: CARDCLASS[8],
    description: CLASS_SKILL_DESCRIPTIONS[8],
    targetingArrowText: null,
    value: 2
  },
  9: {
    name: 'Energy Shield',
    class: CARDCLASS[9],
    description: CLASS_SKILL_DESCRIPTIONS[9],
    targetingArrowText: null,
    value: 2
  }
};

export default CLASS_SKILLS;
