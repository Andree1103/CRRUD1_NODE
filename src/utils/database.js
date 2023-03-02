const { Sequelize } = require('sequelize');

const db = new Sequelize({
    database: "todos",
    port: 5433,
    host: "localhost",
    username: "postgres",
    password: "post",
    dialect: "postgres",
});

module.exports = db;