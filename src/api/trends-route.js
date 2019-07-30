const express = require("express");
const router = express.Router();
const hashtags = require ("../service/getTrends-service");
const HASHTAG = new hashtags();
router.get("/:id", (req, res) => {
    console.log("ROUTES!")
    HASHTAG
    .getTrends(req.params.id)
    .then(result => { 
      console.log("MADE IT")
      var parsedata = JSON.stringify(result, null, "\t");
      res.send(parsedata);
      console.log("ayy")
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});
router.get("/stats/:hashtag", (req, res) => {
  console.log("ROUTES!")
  HASHTAG
  .getTrendStat(req.params.hashtag)
  .then(result => { 
    console.log("MADE IT")
    var parsedata = JSON.stringify(result, null, "\t");
    res.send(parsedata);
    console.log("ayy")
  })
  .catch(err => {
    res.status(400).json({ msg: err.message });
  });
});
router.get("/history/:hashtag", (req, res) => {
  console.log("ROUTES!")
  HASHTAG
  .getTrendHistory(req.params.hashtag)
  .then(result => { 
    console.log("MADE IT")
    var parsedata = JSON.stringify(result, null, "\t");
    res.send(parsedata);
    console.log("ayy")
  })
  .catch(err => {
    res.status(400).json({ msg: err.message });
  });
});
router.get("/suggestions/:text", (req, res) => {
  console.log("ROUTES!")
  HASHTAG
  .getSuggestions(req.params.text)
  .then(result => { 
    console.log("MADE IT")
    var parsedata = JSON.stringify(result, null, "\t");
    res.send(parsedata);
    console.log("ayy")
  })
  .catch(err => {
    res.status(400).json({ msg: err.message });
  });
});
module.exports = router;
