var path = require('path');
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";

var config = require(path.join(__dirname, '../..', 'db', 'config.json'))[env];
var db = {};

var sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.UserModel = require('./userModel')(sequelize, Sequelize);
db.TitleModel = require('./titleModel')(sequelize, Sequelize);

module.exports = db;