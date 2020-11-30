const express = require("express");
const mysql = require("mysql");

const connection = mysql.createConnection({
host: "localhost",
port: 8080,
user: "root",
password: "password",
database: "brag-a-burger-db"
});

module.exports = connection;
