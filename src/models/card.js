export default {
  id: Number,
  name: String,
  category: String,
  description: String,
  images: {
    backgroundImage: String,
    foregroundImage: String
  },
  isGolden: Boolean,
  numerics: {
    attackPower: Number,
    costToPlay: Number,
    healthPoints: Number
  },
  rarity: String,
  sounds: {
    attackSound: String,
    deathSound: String,
    dropSound: String
  },
  type: String
};
