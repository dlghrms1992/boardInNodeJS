//index  route작성
const express = require('express');
const app = express();
const port = 12200;
const http = require('http').createServer(app);
const index = require('./Router/index');
app.use("/api", index);
http.listen(port, (req, res) => console.log("Listenning Port => " + port));
