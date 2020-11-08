const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

//Serve static content from public directory
app.use(express.static("public"));
//Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Use express-handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Giver server access to routes
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

//Server listening
app.listen(PORT, function(){
    console.log('Server listening on: http://localhost:' + PORT);
});