const express = require("express");
var client = require ("../auth/twit-auth")
var woeid_json = require("../../woeid");

var Trends = function(user_inputs){
    this.woeid = searchWOEID(user_inputs);
}
function searchWOEID(val){
    
    for (var i = 0; i < woeid_json.length; i++){
        // look for the entry with a matching `code` value
        if (woeid_json[i].name == val){
           // we found it
           return woeid_json[i].parentid;
        }
      }
}
function generateUrl(woeid) {
    return "https://api.twitter.com/1.1/trends/place.json?id="+woeid;
}
var params = {screen_name: 'nodejs'};
Trends.getTrendyHashtags = (woeid)=>{
  return new Promise((resolve,reject)=>{
    client.get(generateUrl(woeid), params, function(error, tweets, response) {
      if(error){
        console.log("error:",error);
        reject(error);
      }
      else{
          // console.log(response);
          resolve(tweets);
        }
      });  });
          
    }
  
module.exports = Trends;

