const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv').config();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const cloudinary = require('cloudinary')
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

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/'));

// app.use('/static', express.static('public'))
app.use
// app.use('/boot', express.static(path.join(__dirname, '/node_modules/bootstrap/dist')));


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
