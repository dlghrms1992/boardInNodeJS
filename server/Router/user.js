const express = require('express');
const router = express.Router();
const {UserModel} = require('../model/index');
// const db_config = require('../../db/database.js');
// const conn = db_config.init();
// db_config.connect(conn);

router.post("/register", (req, res) => {
    // const sql = 'insert inte toy_user values(?, ?, ?, ?, ?, ?, ?, ?)';
    console.log("db 넣기전 테스트",req);
    // conn.query(sql, function(err, rows, fields){
    //     if(err){
    //         console.error("query is not excuted fail ---> " + err);
    //         res.send({msg: "회원가입에 실패하셨습니다. 다시 시도해주세요~!"});
    //     }     
    //     else{
    //         res.send({result:true});  
    //     } 
    // });

});

module.exports = router;
