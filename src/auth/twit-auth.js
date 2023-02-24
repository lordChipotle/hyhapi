var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: '',
  oauth_nonce:'',
  oauth_signature:'',
  oauth_signature_method:'HMAC-SHA1',
  oauth_timestamp:'1564396973',
  oauth_token:'',
  oauth_version:'1.0',
  access_token: ''
});
 

module.exports = client;
