const connection = require("./connection.js");

// helper function to insert ?
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
};

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {

    var arr = [];
  
    for (var key in ob) {
      arr.push(key + "=" + ob[key]);
    }
  
    return arr.toString();
  }


// start of orm configuration SQL statement functions.
var orm = {

    // SELECT * FROM ...
    all: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    // INSERT INTO ... VALUES
    create: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, res) {
            if (err) {
                throw err;
            }

            cb(res);
        });
    },

    // UPDATE... SET ... WHERE
    update: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            }

            cb(res);
        });
    },

    // SELETE FROM...WHERE
    delete: function (table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            }

            cb(res);
        });
    }
};

// export orm
module.exports = orm;
