import CARDCLASS from 'enums/cardClass.enums';
import initClassSkill from 'lib/moves/init-class-skill';

test(`should provide 2 shieldPoints to currentPlayer`, () => {
  const ctx = { currentPlayer: '0' };
  const G = {
    playerClass: { '0': CARDCLASS[9], '1': CARDCLASS[2] },
    playerShieldPoints: { '0': 0, '1': 0 },
    playerCanUseClassSkill: { '0': true, '1': false },
    turnOrder: ['0', '1']
  };

  initClassSkill(G, ctx);
  expect(G.playerShieldPoints).toEqual({ '0': 2, '1': 0 });
  expect(G.playerCanUseClassSkill).toEqual({ '0': false, '1': false });
});
