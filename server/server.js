//index  route작성
const express = require('express');
const app = express();
const port = 12201;
const http = require('http').createServer(app);
const cors = require('cors');
const index = require('./Router/index');
const register = require('./Router/user');
app.use(cors());
app.use("/api", index);
app.use("/register", register);
http.listen(port, (req, res) => console.log("Listenning Port => " + port));
