var mysql = require("mysql");

// setup mysql connection.
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "brag_a_burger_db"
});

// establish connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// export connection
module.exports = connection;
