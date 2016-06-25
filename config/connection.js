var keys = require('./keys.js');
var mysql = require('mysql');
//var connection = mysql.createConnection(keys.mySQLKeys);
var connection = mysql.createConnection({
	host:'localhost',
	port:'3306',
	user: 'root',
	password: 'Deanie313581',
	database: 'burgers_db'


});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;