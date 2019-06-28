const PORT = process.env.PORT || 3001;
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const errorHandler = require('errorhandler');

//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

//Configure isProduction variable
const isProduction = process.env.NODE_ENV === 'production';

//Initiate our app
const app = express();

//Configure our app
app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({ secret: 'passport-tutorial', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));




//Configure Mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/shreddit', { useNewUrlParser: true });
mongoose.set('debug', true);

//Models & routes
// Passpot stuff from Shreddit
// require('./models/Users');
// require('./config/passport');
app.use(require('./routes'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
} else {
  app.use(express.static(path.join(__dirname, 'public')));
}
if (!isProduction) {
  app.use(errorHandler());
}


//Error handlers & middlewares
if(!isProduction) {
  app.use((req, res, next, err) => {
    if (err) {res.status(err.status || 500);}

    else {
    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  }
  });
}

app.listen(PORT, () => console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`));