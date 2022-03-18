const express = require('express');
const router = express.Router();
const {UserModel} = require('../model/index');
const crypto = require('../common/crypto');
const {v4} = require('uuid');
const jwt = require('jsonwebtoken');
// const db_config = require('../../db/database.js');
// const conn = db_config.init();
// db_config.connect(conn);

router.post("/register.do", async (req, res) => {
    // const sql = 'insert inte toy_user values(?, ?, ?, ?, ?, ?, ?, ?)';
    console.log(" call create --- >",req.body);

    let params = req.body;
    const {password, salt} = await crypto.encryptPassword(params.password);
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
        res.send({"result": true , "msg": "회원가입이 완료 되었습니다.!"});
    }).catch(err => {
        console.log("error ==>", err);
        res.send({"result": false, "msg": err});
    });


});

router.post("/login.do", async (req, res) => {
    console.log(" call login --- >",req.body);
    let param = req.body;

    let user = await UserModel.findOne({
        where : {
            loginId : param.loginId
        }
    });

    if(user == null) {
        return res.send({"result" : false,"msg" : "사용자가 존재하지 않습니다."});
    };

    const hashedPassword = await crypto.decodePassword(param.password, user.password_salt);
    
    if(user.password != hashedPassword){
        return res.send({"result" : false,"msg" : "비밀번호가 일치하지 않습니다."});
    }else {
        let jwtSecret = user.loginId;
        token = jwt.sign({
            type: "JWT",
            nickname: user.nickname,
            loginId: user.loginId
        }, jwtSecret, {
            expiresIn: '30m',
            issuer: user.nickname,
        });

        // return res.send({"result": true, "token": res.status(200).json({code:200, message:'토큰이 발급되었습니다.', token:token})});
        return res.status(200).json({result:true, message:'토큰이 발급되었습니다.', token:token});
    }
    


    // const loginUser = req.session.user {

    // }

});

module.exports = router;
