const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", async (req,res) => {
  const burgers = await burger.all();
  console.log(burgers);
  res.render("index",{burgers: burgers});
});


router.post("/api/burgers",async (req,res) => {
  const newBurger = req.body;
  newBurger.id = null;
  console.log("new burger: ", newBurger);
  const result = await burger.create(newBurger);
  res.json({id: result.insertId});
});

router.put("/api/burgers/:id",async (req,res) => {
  console.log("router updating " + req.params.id);
  const result = await burger.update(req.params.id);
  res.json({id: req.params.id});
});

module.exports = router;