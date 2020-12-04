var mysql = require("mysql");

// use JAWSDB for deployed connection otherwise local
var connection = process.env.JAWSDB_URL

  ? mysql.createConnection(process.env.JAWSDB_URL)

  : mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "brag_a_burger_db"
  });


// export connection
module.exports = connection;
