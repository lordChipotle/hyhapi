var tweets = require("../models/getTweets");

module.exports = class getTweetsService {
    constructor() { }
    getPopByHash(hashT) {
        return new Promise((resolve, reject) => {
            tweets.getPopByHashtag(hashT)
                .then(res => {
                    resolve(res)
                })
                .catch(err => reject(err))
        });
    }
    getdaOG(hashT){
        return new Promise((resolve, reject) => {
            tweets.getdaOG(hashT)
                .then(res => {
                    resolve(res)
                })
                .catch(err => reject(err))
        });    
    }
    getRecByHash(hashT) {
        return new Promise((resolve, reject) => {
            tweets.getRecByHashtag(hashT)
                .then(res => {
                    resolve(res)
                })
                .catch(err => reject(err))
        });
    }
    getRecByLoc(geo) {
        return new Promise((resolve, reject) => {
            tweets.getRecByLoc(geo)
                .then(res => {
                    resolve(res)
                })
                .catch(err => reject(err))
        });
    }
    getRecByLang(lang) {
        return new Promise((resolve, reject) => {
            tweets.getRecByLang(lang)
                .then(res => {
                    resolve(res)
                })
                .catch(err => reject(err))
        });
    }
    getRecByBoth(geo, lang) {
        return new Promise((resolve, reject) => {
            tweets.getRecByBoth(geo, lang)
                .then(res => {
                    resolve(res)
                })
                .catch(err => reject(err))
        });
    }
    getPopByLoc(geo) {
        return new Promise((resolve, reject) => {
            tweets.getPopByLoc(geo)
                .then(res => {
                    resolve(res)
                })
                .catch(err => reject(err))
        });
    }
    getPopByLang(lang) {
        return new Promise((resolve, reject) => {
            tweets.getPopByLang(lang)
                .then(res => {
                    resolve(res)
                })
                .catch(err => reject(err))
        });
    }
    getPopByBoth(geo, lang) {
        return new Promise((resolve, reject) => {
            tweets.getRecByBoth(geo, lang)
                .then(res => {
                    resolve(res)
                })
                .catch(err => reject(err))
        });
    }
    getAllCities(){
        return new Promise((resolve, reject) => {
            tweets.getAllCities()
                .then(res => {
                    resolve(res)
                })
                .catch(err => reject(err))
        });
    }
    getPopByUser(user){
        return new Promise((resolve,reject)=>
        {
            tweets.getPopByUser(user)
                .then(res=>{
                    resolve(res)
                })
                .catch(err=>reject(err))
        });
    }
    getRecByUser(user){
        return new Promise((resolve,reject)=>
        {
            tweets.getRecByUser(user)
                .then(res=>{
                    resolve(res)
                })
                .catch(err=>reject(err))
        });
    }
    
}