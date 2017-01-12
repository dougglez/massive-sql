
var express = require('express');
var session = require('express-session');
var massive = require('massive');

var cors = require('cors');
var bodyParser = require('body-parser');


var db = massive.connectSync({
  db : 'sql-massive-node'
});

var app = module.exports = express();


app.use(bodyParser.json());
app.use(cors());
app.set('db', db);

var productsCtrl = require('./productsCtrl.js');
var port = 3000;

var db = app.get('db');

// Get all products
app.get('/products', productsCtrl.GetAll);
//Get one product, specified by id
app.get('/products/:productId', productsCtrl.GetOne);
// add a product to the table
app.post('/products', productsCtrl.Create);
// update a product on the table
app.put('/products/:productId', productsCtrl.Update);
// delete product from the table
app.delete('/products/:productId', productsCtrl.Delete);





app.listen(port, function() {
  console.log('Starting server on port', port);
});
