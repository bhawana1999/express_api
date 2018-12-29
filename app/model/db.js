'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : '10.194.65.20',
    user     : 'aero',
    password : '12345678',
    database : 'aero'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;

