const { Color } = require('../models');

const colorData = [
  {
    color_name: 'Red',
    price: 14.99,
    stock: 15,
    aura_id: 1,
  },
  {
    color_name: 'Orange',
    price: 14.99,
    stock: 25,
    aura_id: 2,
  },
  {
    color_name: 'Yellow',
    price: 14.99,
    stock: 12,
    category_id: 3,
  },
  {
    color_name: 'Green',
    price: 14.99,
    stock: 50,
    category_id: 4,
  },
  {
    color_name: 'Blue',
    price: 14.99,
    stock: 22,
    category_id: 5,
  },
  {
    color_name: 'Purple',
    price: 14.99,
    stock: 22,
    category_id: 6,
  },
  {
    color_name: 'Violet',
    price: 14.99,
    stock: 22,
    category_id: 7,
  },
];

const seedColor = () => Color.bulkCreate(colorData);

module.exports = seedColor;
