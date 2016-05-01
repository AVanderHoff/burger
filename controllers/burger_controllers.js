var burger = require('../models/burger.js');
var path = require('path');


module.exports = function(app){



app.get('/', function(req,res) {
	
	 burger.selectFalse(function(err,dataFalse){

		burger.selectTrue(function(err,dataTrue){
		
	 		var obj = {
	 			dataFalse:dataFalse,
	 			dataTrue:dataTrue
	 		}
	 
	 		res.render('index',obj);
	 	});
	});

});

app.put('/update', function(req,res){

    burger.newValue(req.body.user_plan)
    res.redirect('/');

});

app.put('/change', function(req,res){

    var key = Object.keys(req.body);
    burger.changeBool(key);
    res.redirect('/');

});






}