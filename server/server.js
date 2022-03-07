//index  route작성
const express = require('express');
const app = express();
const port = 12201;
const http = require('http').createServer(app);
const cors = require('cors');
const index = require('./Router/index');
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use("/api", index);
http.listen(port, (req, res) => console.log("Listenning Port => " + port));
