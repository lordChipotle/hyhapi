var tweets = require("../models/getTweets");
module.exports = class getdaOG {
    constructor() { }

    getPopOG(hashT) {
        return new Promise((resolve, reject) => {
            tweets.getPopByHashtag(hashT)
                .then(res => {
                    resolve(res)
                    
                })
                .catch(err => reject(err))
        });
    }
}