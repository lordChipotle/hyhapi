var Users = require('../models/getUsers');

module.exports = class userService {

    getVerifiedUsers(){
        return new Promise ((resolve, reject)=>{
            Users.prototype.getUsers().then(users =>{
                console.log("users",users);
                let verifiedUsers=[];
                for (var i=0; i< users.length;i++){
                    if (users[i].verified){
                        if (users[i].followers_count >=100000){
                            verifiedUsers.push(users[i]);

                        }
                    }
                }
                resolve(verifiedUsers);
            }).catch(err=>{
                reject(err);
            })
        })

    }

}