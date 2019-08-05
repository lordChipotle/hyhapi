const express = require("express");
var client = require("../auth/twit-auth")
var HttpClient = require("../auth/http-client")
var httpclient = new HttpClient();

var woeid_json = require("../../woeid");
const riteKiteId = "52ea1fead1060e7298706ab83217f353239983c16c02";


var Trends = function (user_inputs) {
  this.woeid = searchWOEID(user_inputs);
}


//search for the woeid of location where its parentid matched the user inputs (parentid can be found on yahoo weather's endpoint)
function searchWOEID(val) {

  for (var i = 0; i < woeid_json.length; i++) {
    // look for the entry with a matching `code` value
    if (woeid_json[i].name == val) {
      // we found it
      return woeid_json[i].parentid;
    }
  }
}

//generate URL for trends searching near a location
function generateUrl(woeid) {
  return "https://api.twitter.com/1.1/trends/place.json?id=" + woeid;
}

//not working currently
function multiHashtagStats(hashtagsArr) {
  const baseLink = "https://api.ritekit.com/v1/stats/multiple-hashtags?tags=";

  for (i in hashtagsArr) {
    baseLink = baseLink + i;
  }
  return baseLink + "&client_id=" + riteKiteId;
}

//find the stats and engagement for a hashtag
function singleHashtagStats(hashtag){
  const baseLink = "https://api.ritekit.com/v1/stats/multiple-hashtags?tags=";
  return baseLink + hashtag+"&client_id=" + riteKiteId;

}
//find the historical stats of engagement for a hashtag

function singleHistoricalStat(hashtag){
  return "https://api.ritekit.com/v1/stats/history/"+hashtag+"?"+"&client_id=" + riteKiteId;

}
//find the suggestions for a hashtag

function hashtagSuggestions(text){
  return "https://api.ritekit.com/v1/stats/hashtag-suggestions?text="+text+"&client_id=" + riteKiteId;
}

var params = { screen_name: 'nodejs' };



Trends.getTrendyHashtags = (woeid) => {
  return new Promise((resolve, reject) => {
    client.get(generateUrl(woeid), params, function (error, tweets, response) {
      if (error) {
        console.log("error:", error);
        reject(error);
      }
      else {
        // console.log(response);
        resolve(tweets);
      }
    });
  });

}
Trends.getSingleHashtagStats = (hashtag) =>{
  return new Promise((resolve, reject) => {
    client.get(singleHashtagStats(hashtag), params, function (error, res) {
      if (error) {
        console.log("error:", error);
        reject(error);
      }
      else {
        // console.log(response);
        resolve(res);
      }
    });
  });

}
Trends.getSingleHistoricalStats = (hashtag) =>{
  return new Promise((resolve, reject) => {
    client.get(singleHistoricalStat(hashtag), params, function (error, res) {
      if (error) {
        console.log("error:", error);
        reject(error);
      }
      else {
        // console.log(response);
        resolve(res);
      }
    });
  });

}
Trends.getSuggestions = (text) =>{
  return new Promise((resolve, reject) => {
    client.get(hashtagSuggestions(text), params, function (error, res) {
      if (error) {
        console.log("error:", error);
        reject(error);
      }
      else {
        // console.log(response);
        resolve(res);
      }
    });
  });

}

  module.exports = Trends;

