const express = require("express");
var client = require ("../auth/twit-auth");
module.exports = class Users{
    getUserByTopic(){
        return 'https://api.twitter.com/1.1/users/search.json?q=fitness';
        }
    
    getUsers(){
        return new Promise((resolve, reject) => {
            client.get(this.getUserByTopic(), function (error, response) {
                if (error) {
                    console.log("error:", error);
                    reject(error);
                }
                else {
                    resolve(response);
                }
            });
        });
    }
}
    

