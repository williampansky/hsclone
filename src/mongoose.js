var str =
  'mongodb+srv://wpansky:adEIaPV0WJVf8vMb@sandboxcluster-v0xfz.mongodb.net/test?retryWrites=true&w=majority';
var express = require('express');
var session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);

var app = express();
var store = new MongoDBStore({
  uri: str,
  collection: 'mySessions'
});

// Catch errors
store.on('error', function(error) {
  console.log(error);
});

app.use(
  require('express-session')({
    secret: 'This is a secret',
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    },
    store: store,
    // Boilerplate options, see:
    // * https://www.npmjs.com/package/express-session#resave
    // * https://www.npmjs.com/package/express-session#saveuninitialized
    resave: true,
    saveUninitialized: true,
    useUnifiedTopology: true
  })
);

app.get('/', function(req, res) {
  res.send('Hello ' + JSON.stringify(req.session));
});

server = app.listen(3000);
