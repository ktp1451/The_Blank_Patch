//COLORS = Products

const User = require('./User');
const Color = require('./Color');

Color.belongsTo(User, {
  foreignKey: 'User_id',
});

User.hasMany(Color, {
  foreignKey: 'user_id'
});


module.exports = { 
  User,
  Color,
};
