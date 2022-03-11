const express = require('express');
console.log("dirname == > " + __dirname);
const router = express.Router();
// const db_config = require('../../db/database.js');
// const conn = db_config.init();
// db_config.connect(conn);
const {TitleModel} = require('../model/index');


router.get("/", async (req, res) => {
    const titleList = await TitleModel.findAll();
    // console.log("list ==> ", titleList);
    res.send({list: titleList});
});


module.exports = router;

