// Dependencies
const express = require("express");
const path = require("path");

// Import express-handlebars
const exphbs = require("express-handlebars");

const routes = require("./controllers");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});
// Describe what the following two lines of code are doing.
// The following two lines of code are setting Handlebars.js as the default template engine.
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

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
app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});
