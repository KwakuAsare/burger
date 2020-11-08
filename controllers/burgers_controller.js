const express = require('express');
const router = express.Router();

const burger = require('../models/burger.js');

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var burgerObj = {
            burgers: data
        };
        res.render("index", burgerObj);
    });
});

router.post("/api/burgers", function(req, res){
    burger.insertOne(["burger_name"], [req.body.burger_name], function(result) {
      console.log(result);
      res.status(200).end();
    });
});

router.put("/api/burgers/:id", function(req,res){
  burger.updateOne({devoured: 1},{id: req.params.id}, function(result){
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;