const express = require("express");
const bodyParser = require("body-parser");
const layout = require('express-ejs-layouts');
const routes = require("./routes/routes");
const dotenv = require('dotenv');
const app = express();

dotenv.load();
app.set('view engine', 'ejs');
app.use(layout);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(routes);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on port ${process.env.PORT || 3000}`);
});