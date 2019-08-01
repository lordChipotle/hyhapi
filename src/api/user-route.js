const express = require("express");
const router = express.Router();
const users = require('../models/getUsers');
const userService = require('../service/getUsers-service');


router.get("/users",(req,res)=>{
    userService.prototype.getVerifiedUsers().then((respond)=>{
        debugger
        console.log(respond);
        res.status(200).json(respond);
    }).catch(err=>{
        console.log({"err": err})
        res.status(400).json('err',err);
    })
})

module.exports=router;