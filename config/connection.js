//var keys = require('./keys.js');
var mysql = require('mysql');
//var connection = mysql.createConnection(keys.mySQLKeys);
var connection = mysql.createConnection({
	host:'q3vtafztappqbpzn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	port:'3306',
	user: 'onwmf6porgcvn7d1',
	password: 'fuc1rtq5i0bz7la0',
	database: 'bdhx28yvmiegyxp6'


});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;