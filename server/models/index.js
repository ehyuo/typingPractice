const path = require('path');
const Sequelize = require('sequelize');

const Record = require('./record');
const Content = require('./content');

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Record = Record;
db.Content = Content;

Record.init(sequelize);
Content.init(sequelize);



module.exports = db;