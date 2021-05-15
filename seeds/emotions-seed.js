const { Emotions } = require('../models');

const emotionData = [
  {
    emotions_name: 'courage',
  },
  {
    emotions_name: 'iritable',
  },
  {
    emotions_name: 'joy',
  },
  {
    emotions_name: 'lazy',
  },
  {
    emotions_name: 'wisdom',
  },
  {
    emotions_name: 'fearful',
  },
  {
    emotions_name: 'ingenuity',
  },
  {
    emotions_name: 'selfish',
  },
  {
    emotions_name: 'spiritual',
  },
  {
    emotions_name: 'snobish',
  },
  {
    emotions_name: 'teacher',
  },
  {
    emotions_name: 'disloyal',
  },
  {
    emotions_name: 'mystic',
  },
  {
    emotions_name: 'spiteful',
  },
];

const seedEmotions = () => Emotions.bulkCreate(emotionsData);

module.exports = seedEmotions;