const express    = require('express'),
      path       = require('path'),
      serveStatic = require('serve-static'),
      bodyParser = require('body-parser'),
      app        = express();


app.use(serveStatic(path.join(__dirname, 'public')));

app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/main.html'));
});

app.use( express.json() );

app.listen( process.env.PORT || 3000)