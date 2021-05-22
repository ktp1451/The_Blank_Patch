const router = require('express').Router();
const { Color, User, } = require('../models');


router.get('/', async (req, res) => {
  try {
    console.log(req.session)
    res.render('homepage', {  
      loggedIn: req.session.loggedIn 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/shopping', async (req, res) => {
  try {
    // Get all Colors(products) and JOIN with user data
    const colorData = await Color.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    // Serialize data so the template can read it
    const colors = colorData.map((products) => products.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('shopping', { 
      colors, 
      loggedIn: req.session.loggedIn 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/shopping/:id', async (req, res) => {
  try {
    // Get all Colors(products) and JOIN with user data
    const colorData = await Color.findByPk({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    // Serialize data so the template can read it
    const colors = colorData.map((products) => products.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('shopping', { 
      colors, 
      loggedIn: req.session.loggedIn 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/cart', async (req, res) => {
  try {
    // Get all Colors(products) and JOIN with user data
    const colorData = await Color.findAll({
      include: [
        {
          model: User
        },
      ],
    });

    // Serialize data so the template can read it
    const colors = colorData.map((products) => products.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('cart', { 
      colors, 
      loggedIn: req.session.loggedIn 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;