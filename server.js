//server.js
'use strict'

//first we import our dependencies...
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Design = require('./model/designs')

mongoose.connect("mongodb://localhost/kicksstarter")

//and create our instances
var app = express();
var router = express.Router();

//set our port to either a predetermined port number if you have set it up, or 3001
var port = process.env.API_PORT || 3001;

//now we should configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, we will set our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //and remove cacheing so we get the most recent designs
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

//now  we can set the route path & initialize the API
router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'});
});

//adding the /designs route to our /api router
router.route('/designs')
  //retrieve all designs from the database
  .get(function(req, res) {
    //looks at our Design Schema
    Design.find(function(err, designs) {
      if (err)
        res.send(err);
      //responds with a json object of our database designs.
      res.json(designs)
    });
  })
  //post new design to the database
  .post(function(req, res) {
    var design = new Design();
    (req.body.designer) ? design.designer = req.body.designer : null;
    (req.body.text) ? design.text = req.body.text : null;
    (req.body.imageURL) ? design.imageURL = req.body.imageURL : null;
    (req.body.material) ? design.material = req.body.material : null;
    (req.body.inspiration) ? design.inspiration = req.body.inspiration : null;

    design.save(function(err) {
      if (err)
        res.send(err);
      res.json({ message: 'Design successfully added!' });
    });
  });
  router.route("/designs/:design_id")
    .put(function(req, res) {
      Design.findById(req.params.design_id, function(err, design) {
        if (err)
        res.send(err);
        (req.body.designer) ? design.designer = req.body.designer : null;
        (req.body.text) ? design.text = req.body.text : null;
        (req.body.imageURL) ? design.imageURL = req.body.imageURL : null;
        (req.body.material) ? design.material = req.body.material : null;
        (req.body.inspiration) ? design.inspiration = req.body.inspiration : null;
        design.save(function(err) {
          if (err)
          res.send(err);
          res.json({ message: "Design has been updated" })
        })
      })
    })
.put(function(req, res) {
  Design.findById(req.params.design_id, function(err, design) {
    if (err)
    res.send(err);
    res.json({message: 'Design has been updated'})
  })
})

.delete(function(req, res) {
  Design.remove({ _id: req.params.design_id}, function(err, design) {
    if (err)
    res.send(err);
    res.json({message: 'Design has been deleted'})
  })
})
//Use our router configuration when we call /api
app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
