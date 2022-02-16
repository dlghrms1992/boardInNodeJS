const express = require('express');
console.log("dirname == > " + __dirname);
console.log("filename == > " + __filename);
const router = express.Router();
const db_config = require('../../db/database.js');
const conn = db_config.init();
db_config.connect(conn);
router.get("/", (req, res) => {
    const sql = 'select * from toy_title';
    conn.query(sql, function(err, rows, fields){
        if(err) console.error("query is not excuted fail ---> " + err);    
        else res.send({list:rows});
    });
    // res.send({list:'hi'});
});

module.exports = router;

