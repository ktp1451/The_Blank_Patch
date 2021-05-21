//COLORS = Products

const User = require('./User');
const Color = require('./Color');
const Cart = require('./Cart')

Color.belongsTo(User, {
  foreignKey: 'User_id',
});

User.hasMany(Color, {
  foreignKey: 'user_id'
});

User.belongsToMany(Color, { through: Cart });

Color.belongsToMany(User, { through: Cart });

module.exports = { 
  User,
  Color,
  Cart
};
