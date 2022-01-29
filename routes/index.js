//index  route작성
var express = require('express');
var router = express.Router();

//라우터 get()함수를 이용해 request URL('/')에 대한 업무로직 정의

router.get('/', function(req, res, next){
    res.send('index page');
});

module.exports  = router;