const express = require("express");
const router = express.Router();
const tweets = require ("../service/getTweets-service");
const TWEETS = new tweets();
router.get("/popular/hashtag/:hashtag", (req, res) => {
    console.log("ROUTES!")
    TWEETS
    .getPopByHash(req.params.hashtag)
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
router.get("/recent/hashtag/:hashtag", (req, res) => {
    console.log("ROUTES!")
    TWEETS
    .getRecByHash(req.params.hashtag)
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
router.get("/recent/language/:lang", (req, res) => {
    console.log("ROUTES!")
    TWEETS
    .getRecByLang(req.params.lang)
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
router.get("/popular/language/:lang", (req, res) => {
    console.log("ROUTES!")
    TWEETS
    .getPopByLang(req.params.lang)
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
router.get("/recent/location/:city", (req, res) => {
    console.log("ROUTES!")
    TWEETS
    .getRecByLoc(req.params.city)
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

router.get("/popular/location/:city", (req, res) => {
    console.log("ROUTES!")
    TWEETS
    .getPopByLoc(req.params.city)
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
router.get("/viewAllCities", (req, res) => {
    console.log("ROUTES!")
    TWEETS
    .getAllCities()
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
router.get("/popular/username/:user", (req, res) => {
    console.log("ROUTES!")
    TWEETS
    .getPopByUser(req.params.user)
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
router.get("/recent/username/:user", (req, res) => {
    console.log("ROUTES!")
    TWEETS
    .getRecByUser(req.params.user)
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
