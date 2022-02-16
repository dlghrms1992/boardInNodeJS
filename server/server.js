//index  route작성
const express = require('express');
const app = express();
const port = 12201;
const http = require('http').createServer(app);
const cors = require('cors');
const index = require('./Router/index');
app.use(cors());
app.use("/api", index);
http.listen(port, (req, res) => console.log("Listenning Port => " + port));
