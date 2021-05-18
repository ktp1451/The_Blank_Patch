const router = require('express').Router();
const { Color, User } = require('../models');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const colorData = await Color.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    // Serialize data so the template can read it
    const colors = colorData.map((project) => project.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      colors, 
      loggedIn: req.session.loggedIn 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;