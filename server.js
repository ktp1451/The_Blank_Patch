// Dependencies
const express = require("express");
const path = require("path");
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// Import express-handlebars
const exphbs = require("express-handlebars");
const sequelize = require('./config/connection');
const routes = require("./controllers");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});
// Describe what the following two lines of code are doing.
// The following two lines of code are setting Handlebars.js as the default template engine.
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//          app.use()
//          variable is set to -> require('./controllers)
//           /cart-routes'));
// app.use(require('./controllers/homepage-routes'));
// app.use(require('./controllers/shopping_list-routes'));

app.use(routes);

// Starts the server to begin listening
//MAKE SURE YOU CREATE A DB IN MYSQL WOKBENCH AND ENTERED YOUR INFO IN THE .ENV FILE
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
