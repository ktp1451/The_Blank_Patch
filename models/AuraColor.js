// AURACOLOR IS EXTRA DB TABLE TO REFERENCE A PRODUCT THROUGH BOTH THE AURA AND THE COLOR

const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class AuraColor extends Model {}

AuraColor.init(
  {
  //   // define columns
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'product',
      key: 'id',
    },
  },
  tag_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'tag',
      key: 'id',
    },
  },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'aura_color',
  }
);

module.exports = AuraColor;
