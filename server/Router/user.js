const express = require('express');
const router = express.Router();
const {UserModel} = require('../model/index');
const crypto = require('../common/crypto');
const {v4} = require('uuid');

// const db_config = require('../../db/database.js');
// const conn = db_config.init();
// db_config.connect(conn);

router.post("/register", async (req, res) => {
    // const sql = 'insert inte toy_user values(?, ?, ?, ?, ?, ?, ?, ?)';
    console.log(" call create --- >",req.body);

    let params = req.body;
    const {password, salt} = await crypto.encryptPassword(params.password);
    console.log("test ==> ",  password);
    console.log("test ==> ",  salt);
    UserModel.create({
        userid: v4(),
        loginId: params.loginId,
        username: params.username,
        usernick: params.usernick,
        password: password,
        password_salt: salt,
        phone: params.phone,
        email: params.email,
        type: params.type,
        regdate: new Date(),
    }).then(result => {
        console.log('result ==>', result);
        res.send({"result": true});
    }).catch(err => {
        console.log("error ==>", err);
        res.send({"result": err});
    });


});

module.exports = router;
