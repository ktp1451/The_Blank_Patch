const router = require('express').Router();
const { Color, User } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const allCategoryData = await Color.findAll({
      include: [{ model: User }],
    });
    res.status(200).json(allCategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const allCategoryData = await Color.findByPk(req.params.id, {
      include: [{ model: User }],
    });

    if (!allCategoryData) {
      res.status(404).json({ message: 'No Color found with that id!' });
      return;
    }

    res.status(200).json(allCategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const allCategoryData = await Color.create({
      product_id: req.body.product_id,
      category_name: req.body.category_name,
    });
    res.status(200).json(allCategoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const allCategoryData = await Color.update(
      req.body,
      {
      where: {
        id: req.params.id,
      },
    });

    if (!allCategoryData) {
      res.status(404).json({ message: 'No Color found with that id!' });
      return;
    }

    res.status(200).json(allCategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const allCategoryData = await Color.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!allCategoryData) {
      res.status(404).json({ message: 'No Color found with that id!' });
      return;
    }

    res.status(200).json(allCategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
