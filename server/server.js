//index  route작성
const express = require('express');
const app = express();
const port = 12201;
const http = require('http').createServer(app);
const cors = require('cors');
const index = require('./Router/index');
const user = require('./Router/user');
const bodyParser = require('body-parser');
const {sequelize} = require('./model/index');



sequelize.sync().then(() => console.log("connected database~!")).catch(err => console.error("error in database connecting ", err));
app.use(cors());

app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/user", user);
app.use("/api", index);
http.listen(port, (req, res) => console.log("Listenning Port => " + port));
