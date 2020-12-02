const express = require("express");
const mysql = require("mysql");

const connection = mysql.createConnection({
host: "localhost",
port: 8080,
user: "root",
password: "password",
database: "brag_a_burger_db"
});

module.exports = connection;
