const express = require('express');
console.log("dirname == > " + __dirname);
const router = express.Router();
// const db_config = require('../../db/database.js');
// const conn = db_config.init();
// db_config.connect(conn);
const {TitleModel} = require('../model/index');


console.log("testt == >", router);
router.get("/", (req, res) => {
    const titleList = TitleModel.findAll();
    res.send({list: titleList});
    // // const sql = 'select * from toy_title';
    // conn.query(sql, function(err, rows, fields){
    //     if(err) console.error("query is not excuted fail ---> " + err);    
    //     else res.send({list:rows});
    // });
    // db_config.end(conn);
});

// app.use("/register", register);
module.exports = router;

