const connection = require('../config/connection.js');

var orm = {
    selectAll: function(table, callback){
        var queryString = "SELECT * FROM ??;"
        connection.query(queryString, [table], function(err, result){
            if (err) throw err;
            callback(result);
        });
    },
    insertOne: function(table, columns, values, callback){
        var queryString = "INSERT INTO ?? (??) VALUES (?);"
        connection.query(queryString, [table, columns, values], function(err, result){
            if (err) throw err;
            callback(result);
        });
    },
    updateOne: function(table, columns, value, callback){
        var queryString = "UPDATE ?? SET ? WHERE ?";
        connection.query(queryString, [table, columns, value], function(err, result){
            if (err) throw err;
            callback(result);
        });
    }
};

module.exports = orm;