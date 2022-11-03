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

app.get('/tableData', function(req, res) {
    var data = {batteryCharge: Math.round(Math.random()*100), pack1: Math.round(Math.random()*100), pack2: Math.round(Math.random()*100),
    pack3: Math.round(Math.random()*100), pack4: Math.round(Math.random()*100), pack5: Math.round(Math.random()*100), pack6: Math.round(Math.random()*100), batteryTemp: Math.round(Math.random()*100), motorTemp: Math.round(Math.random()*100), externalTemp: Math.round(Math.random()*100)};
    res.end(JSON.stringify(data));
});

app.use( express.json() );

app.listen( process.env.PORT || 3000)