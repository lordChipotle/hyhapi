var trends = require ("../models/getTrends");

module.exports = class getTrendsService{
    constructor(){}
    getTrends(id) {
        return new Promise((resolve, reject) => {
          trends.getTrendyHashtags(id)
          .then(res => {
              resolve(res)
          })
          .catch(err => reject(err))
        });
      }
}