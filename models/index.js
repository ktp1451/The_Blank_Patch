// EMOTIONS = PRODUCTS
// AURA = TAG
//COLORS = CATEGORIES
// AURACOLOR IS EXTRA DB TABLE TO REFERENCE A PRODUCT THROUGH BOTH THE AURA AND THE COLOR

const User = require('./User');
const Emotions = require('./Emotions');
const Color = require('./Color');
const Aura = require('./Aura');
const AuraColor = require('./AuraColor');

Emotions.belongsTo(Color, {
  foreignKey: 'color_id',
});

Color.hasMany(Emotions, {
  foreignKey: 'emotion_id'
});

Emotions.belongsToMany(Aura, { through:AuraColor });

Aura.belongsToMany(Emotions, { through:AuraColor })

module.exports = { 
  User,
  Emotions,
  Color,
  Aura,
  AuraColor };
