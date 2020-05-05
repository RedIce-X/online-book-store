require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.render("auth/login");
});

const port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
    console.log("The server has started...");
});