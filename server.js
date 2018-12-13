// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
const fs = require('fs');
const engine = require('ejs-mate');

// use ejs-locals for all ejs templates:
app.engine('ejs', engine);
 
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// render 'index' into 'boilerplate':
app.get('/',function(req,res){
  res.render('index');
});

// http://expressjs.com/en/starter/basic-routing.html
/*app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});*/


app.get('/index.html', function(request, response) {
  console.log("resp");
  response.render('index');
});



app.get('/*bots.html',function(request, response) {
  response.render('bots');
});


app.get('/*games.html',function(request, response) {
  response.render('games');
});


app.get('/*models.html',function(request, response) {
  response.render('models');
});


app.get('/bots/axyab.html',function(request, response) {
  response.render('axyab');
});


app.get('/bots/tarjomism.html',function(request, response) {
  response.render('tarjomism');
});



app.get('/bots/metabot.html',function(request, response) {
  response.render('metabot');
});



app.get('/games/mashinran.html',function(request, response) {
  response.render('mashinran');
});



app.get('/bots/utility-bot.html',function(request, response) {
  response.render('utility-bot');
});



app.get('/bots/torrent-finder.html',function(request, response) {
  response.render('torrent-finder');
});


app.get('/models/beetle.html',function(request, response) {
  response.render('beetle');
});

app.get('/models/house.html',function(request, response) {
  response.render('house');
});


app.get('/models/fiat.html',function(request, response) {
  response.render('fiat');
});

app.get('/models/sport-car.html',function(request, response) {
  response.render('sport-car');
});


app.get('/models/laser-tower.html',function(request, response) {
  response.render('laser-tower');
});


app.get('/models/bridge.html',function(request, response) {
  response.render('bridge');
});


app.get('/models/turret.html',function(request, response) {
  response.render('turret');
});


// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
