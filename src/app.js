const fs = require('fs');
const path = require('path');

const express = require('express');

const app = express();

// setting views directory
app.set('views', path.join(__dirname, 'views'));
// setting the views engine
app.set('view engine', 'ejs');
// configuring the statis directory (css, js, etc)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.render('index', { title: 'Index' }));

app.listen(3000, () => console.log('PS Project Running on port 3000!'));
