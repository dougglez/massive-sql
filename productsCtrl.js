// bringing db into this ctrl
var app = require('./server');
var db = app.get('db');
//these are the methods to call to the db

module.exports = {
  Create: function(req, res, next){
    db.create_product([req.body.name, req.body.description, req.body.price, req.body.imgurl], function(err, products){
      console.log(err, products);
      res.json(products);
    });
  },

  GetAll: function(req, res, next) {
    db.read_products(function(err, products) {
      console.log(err, products);
      res.status(200).json(products);
    });
  },

  GetOne: function(req, res, next) {
    db.read_product([req.params.productId], function(err, product){
      console.log(err, product);
      res.status(200).json(product);
    });
  },

  Update: function(req, res, next) {
    db.products.update(req.query, function(err, response) {
			if (err) {
				res.send(err);
			}
			res.send(response);
		});

	},

  Delete: function(req, res, next) {
    db.delete_product([req.params.productId], function(err, product) {
      console.log(err, product);
      res.status(204).json(product);
    });
  }

};
