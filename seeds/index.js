const sequelize = require('../config/connection');
const { User, Color } = require('../models');

const userData = require('./userData.json');
const colorData = require('./color-seed.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const colors of colorData) {
    await Color.create({
      ...colors,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();

