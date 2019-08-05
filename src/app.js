const fs = require('fs');
const path = require('path');

const express = require('express');

const app = express();

const { accounts, users, writeJSON } = require('./data');

const accountRoutes = require('./routes/accounts.js');
const servicesRoutes = require('./routes/services.js');


// setting views directory
app.set('views', path.join(__dirname, 'views'));
// setting the views engine
app.set('view engine', 'ejs');
// configuring the static directory (css, js, etc)
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index', { title: 'Account Summary', accounts });
});

app.use('/account', accountRoutes);
app.use('/services', servicesRoutes);

app.get('/profile', (req, res) => {
  res.render('profile', { user: users[0] });
});



app.listen(3000, () => console.log('PS Project Running on port 3000!'));
