var trends = require("../models/getTrends");

module.exports = class getTrendsService {
  constructor() { }
  getTrends(id) {
    return new Promise((resolve, reject) => {
      trends.getTrendyHashtags(id)
        .then(res => {
          resolve(res)
        })
        .catch(err => reject(err))
    });
  }
  getTrendStat(hashtag) {
    return new Promise((resolve, reject) => {
      trends.getSingleHashtagStats(hashtag)
        .then(res => {
          resolve(res)
        })
        .catch(err => reject(err))
    });
  }
  getTrendHistory(hashtag){
    return new Promise((resolve, reject) => {
      trends.getSingleHistoricalStats(hashtag)
        .then(res => {
          resolve(res)
        })
        .catch(err => reject(err))
    });
  }
  getSuggestions(text){
    return new Promise((resolve, reject) => {
      trends.getSuggestions(text)
        .then(res => {
          resolve(res)
        })
        .catch(err => reject(err))
    });
  }}