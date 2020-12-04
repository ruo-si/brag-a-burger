var mysql = require("mysql");

if (process.env.JAWSDB_URL) {

  connection = mysql.createConnection(process.envJAWS_URL)

} else {

  // setup mysql connection.
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "brag_a_burger_db"
  });
}


// establish connection
connection.connect();

// export connection
module.exports = connection;
