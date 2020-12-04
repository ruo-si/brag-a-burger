var orm = require("../config/orm.js");

// passing values from routes to db orm and return res in callback 

// burger orm configuration
const burger = {

    // select all operation
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },

    // create burger operation
    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },

    // update burger operation
    update: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res) {
            cb, (res);
        });
    },

    // delete burger operation
    detele: function (condition, cb) {
        orm.delete("burgers", condition, function (res) {
            cb(res);
        });
    }
};

// export burger orm
module.exports = burger;