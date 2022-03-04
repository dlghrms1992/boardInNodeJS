const express = require('express');
console.log("dirname == > " + __dirname);
const app = express();

const router = express.Router();
const register = require('./user');
const db_config = require('../../db/database.js');
const conn = db_config.init();
db_config.connect(conn);

router.get("/", (req, res) => {
    const sql = 'select * from toy_title';
    conn.query(sql, function(err, rows, fields){
        if(err) console.error("query is not excuted fail ---> " + err);    
        else res.send({list:rows});
    });
    db_config.end(conn);
});

app.use("/register", register);
module.exports = router;

