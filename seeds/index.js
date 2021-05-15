const seedAura = require('./aura-seed');
const seedColor = require('./color-seed');
const seedEmotions = require('./emotions-seed');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedAura();
  console.log('\n----- AURA SEEDED -----\n');

  await seedColor();
  console.log('\n----- COLOR SEEDED -----\n');

  await seedEmotions();
  console.log('\n----- EMOTIONS SEEDED -----\n');


  process.exit(0);
};

seedAll();
