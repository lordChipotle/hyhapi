const express = require("express");
var client = require("../auth/twit-auth")
const cities = require('cities.json');
const fs = require('fs')
var Tweets = function (factor) {
    this.hashtag = factor.hashtag;
    this.geo=factor.geo;
    this.lang=factor.lang;
    this.user=factor.user;

}


function generateUrlLocLangRec(geo, lang) {
    if (lang === null) {
        return "https://api.twitter.com/1.1/search/tweets.json?q=geocode=" + geo + ",1km&result_type=recent";

    } else if (geo === null) {
        return "https://api.twitter.com/1.1/search/tweets.json?q=lang=" + lang + ",1km&result_type=recent";
    } else {
        return "https://api.twitter.com/1.1/search/tweets.json?q=geocode" + geo + ",1km&lang=" + lang + "&result_type=recent";

    }
}
function generateUrlLocLangPop(geo, lang) {
    if (lang === null) {
        return "https://api.twitter.com/1.1/search/tweets.json?q=geocode=" + geo + ",1km&result_type=popular";

    } else if (geo === null) {
        return "https://api.twitter.com/1.1/search/tweets.json?q=lang=" + lang + ",1km&result_type=popular";
    } else {
        return "https://api.twitter.com/1.1/search/tweets.json?q=geocode" + geo + ",1km&lang=" + lang + "&result_type=popular";

    }
}


function generateUrlUserHashRec(user,hash) {
    if (user === null) {
        return "https://api.twitter.com/1.1/search/tweets.json?q=%23" + hash + "&result_type=recent";
    }
    else if (hash === null) {
        return "https://api.twitter.com/1.1/search/tweets.json?q=from%3A"+user+"&result_type=recent";
    }
    else{
        return "https://api.twitter.com/1.1/search/tweets.json?q=from%3A"+user+"%20%23"+hash+"&result_type=recent"
    }
}
function generateUrlUserHashPop(user,hash) {
    if (user === null) {
        return "https://api.twitter.com/1.1/search/tweets.json?q=%23" + hash + "&result_type=popular";
    }
    else if (hash === null) {
        return "https://api.twitter.com/1.1/search/tweets.json?q=from%3A"+user+"&result_type=popular";
    }
    else{
        return "https://api.twitter.com/1.1/search/tweets.json?q=from%3A"+user+"%20%23"+hash+"&result_type=popular";
    }
}



function convertToGeocode(city){
    for (var i = 0; i < cities.length; i++){
        // look for the entry with a matching `code` value
        if (cities[i].name == city){
           // we found it
           return cities[i].lat+","+cities[i].lng;
        }
      }
}
var params = { screen_name: 'nodejs' };
Tweets.getRecByHashtag = (hashtag) => {
    return new Promise((resolve, reject) => {
        client.get(generateUrlUserHashRec(null,hashtag), params, function (error, tweets, response) {
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
Tweets.getPopByHashtag = (hashtag) => {
    return new Promise((resolve, reject) => {
        client.get(generateUrlUserHashPop(null,hashtag), params, function (error, tweets, response) {
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
Tweets.getPopByUser = (username) => {
    return new Promise((resolve, reject) => {
        client.get(generateUrlUserHashPop(username,null), params, function (error, tweets, response) {
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
Tweets.getRecByUser = (username) => {
    return new Promise((resolve, reject) => {
        client.get(generateUrlUserHashRec(username,null), params, function (error, tweets, response) {
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
Tweets.getRecByUserHash = (username,hash) => {
    return new Promise((resolve, reject) => {
        client.get(generateUrlUserHashRec(username,hash), params, function (error, tweets, response) {
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
Tweets.getPopByUserHash = (username,hash) => {
    return new Promise((resolve, reject) => {
        client.get(generateUrlUserHashPop(username,hash), params, function (error, tweets, response) {
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
Tweets.getRecByLoc = (city) => {
    return new Promise((resolve, reject) => {
        client.get(generateUrlLocLangRec(convertToGeocode(city), null), params, function (error, tweets, response) {
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
Tweets.getRecByLang = (lang) => {
    return new Promise((resolve, reject) => {
        client.get(generateUrlLocLangRec(null, lang), params, function (error, tweets, response) {
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
Tweets.getRecByBoth = (city, lang) => {
    return new Promise((resolve, reject) => {
        client.get(generateUrlLocLangRec(convertToGeocode(city), lang), params, function (error, tweets, response) {
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
Tweets.getPopByLoc = (city) => {
    return new Promise((resolve, reject) => {
        client.get(generateUrlLocLangPop(convertToGeocode(city), null), params, function (error, tweets, response) {
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
Tweets.getPopByBoth = (city, lang) => {
    return new Promise((resolve, reject) => {
        client.get(generateUrlLocLangPop(convertToGeocode(city), lang), params, function (error, tweets, response) {
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
Tweets.getPopByLang = (lang) => {
    return new Promise((resolve, reject) => {
        client.get(generateUrlLocLangPop(null, lang), params, function (error, tweets, response) {
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
Tweets.getAllCities=()=>{
    return new Promise((resolve, reject) => {
        resolve(cities);
    
});
}

module.exports = Tweets;

