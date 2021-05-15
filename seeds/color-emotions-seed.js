const { AuraColor } = require('../models');

const auraColorData = [
  {
    color_id: 1,
    emotion_id: 1,
  },
  {
    color_id: 1,
    emotion_id: 2,
  },
  {
    color_id: 2,
    emotion_id: 3,
  },
  {
    color_id: 2,
    emotion_id: 4,
  },
  {
    color_id: 3,
    emotion_id: 5,
  },
  {
    color_id: 3,
    emotion_id: 6,
  },
  {
    color_id: 4,
    emotion_id: 7,
  },
  {
    color_id: 4,
    emotion_id: 8,
  },
  {
    color_id: 5,
    emotion_id: 9,
  },
  {
    color_id: 5,
    emotion_id: 10,
  },
  {
    color_id: 6,
    emotion_id: 11,
  },
  {
    color_id: 6,
    emotion_id: 12,
  },
  {
    color_id: 7,
    emotion_id: 13,
  }, {
    color_id: 7,
    emotion_id: 14,
  },
];

const seedProductTags = () => AuraColor.bulkCreate(productAuraColor);

module.exports = seedAuraColor;
