const router = require('express').Router();

// const homeRoutes = require('./home-routes.js');
//MVC activity 13 the line above will take you to a file called home-routes stored in the controllers folder
// router.use('/', homeRoutes);
//runs whatever code is in homeRoutes


router.get('/', async (req, res) => {
    // Add a comment describing the purpose of the render method
    // This method is rendering the 'all' Handlebars.js template. This is how we connect each route to the correct template.
    //the code below specific method is speaking to handlebars
    res.render('homepage');
  });


router.get('/cart', async (req, res) => {
  res.render('cart');
});


module.exports = router;