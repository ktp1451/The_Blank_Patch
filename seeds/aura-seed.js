const { Aura } = require('../models');

const auraData = [
  {
    aura_name: 'Positive',
  },
  {
    aura_name: 'Negative',
  },

];

const seedAura = () => Aura.bulkCreate(auraData);

module.exports = seedAura;
