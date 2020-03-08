const playerCanBeAttacked = {
  __DATA_MODEL: {
    playerCanBeAttackedMinion: {
      '0': false,
      '1': false
    },
    playerCanBeAttackedPlayer: {
      '0': false,
      '1': false
    },
    playerCanBeAttackedSpell: {
      '0': false,
      '1': false
    },
    playerCanBeAttackedWarcry: {
      '0': false,
      '1': false
    }
  },
  enableByMinion: (G, player) => (G.playerCanBeAttackedByMinion[player] = true),
  enableByPlayer: (G, player) => (G.playerCanBeAttackedPlayer[player] = true),
  enableBySpell: (G, player) => (G.playerCanBeAttackedSpell[player] = true),
  enableByWarcry: (G, player) => (G.playerCanBeAttackedWarcry[player] = true),
  disable: (G, player) => {
    G.playerCanBeAttackedMinion[player] = false;
    G.playerCanBeAttackedPlayer[player] = false;
    G.playerCanBeAttackedSpell[player] = false;
    G.playerCanBeAttackedWarcry[player] = false;
  }
};

export default playerCanBeAttacked;
