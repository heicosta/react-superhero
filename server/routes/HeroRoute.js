const express = require('express');
const app = express();
const HeroRoute = express.Router();

// Require Hero model in our routes module
let Hero = require('../models/Hero');

// Defined store route
HeroRoute.route('/add').post(function (req, res) {
  let hero = new Hero(req.body);
  hero.save()
    .then(post => {
    res.status(200).json(post);
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
HeroRoute.route('/').get(function (req, res) {
    Hero.find(function (err, posts){
    if(err){
      console.log(err);
    }
    else {
      res.json(posts);
    }
  });
});

// Defined delete | remove | destroy route
HeroRoute.route('/delete/:id').get(function (req, res) {
    Hero.findByIdAndRemove({_id: req.params.id}, function(err, post){
        if(err) res.json(err);
        else res.json(req.params.id);
    });
});

module.exports = HeroRoute;
