const express = require('express');
const router = express.Router();
const {UserModel} = require('../model/index');
let crypto = require('crypto');

// const db_config = require('../../db/database.js');
// const conn = db_config.init();
// db_config.connect(conn);

router.post("/register", (req, res) => {
    // const sql = 'insert inte toy_user values(?, ?, ?, ?, ?, ?, ?, ?)';
    console.log("db 넣기전 테스트",req.body);
    console.log("db 넣기전 테스트",  UserModel);
    let params = req.body;
    UserModel.create({
        userid: crypto.randomUUID(),
        loginId: params.loginId,
        username: params.username,
        usernick: params.usernick,
        password: params.password,
        phone: params.phone,
        email: params.email,
        type: params.type,
        regdate: new Date(),
    }).then(result => {
        console.log('result ==>', result);
    }).catch(err => {
        console.log("error ==>", err);
    });


});

module.exports = router;
