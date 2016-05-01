var orm = require('../config/orm.js');

var burger = {

selectFalse:function(callback){ orm.selectFalse(function(err,data){

	if (err) {          
        	callback(err,null);
        } else {               
        	callback(null,data);
        } 		
	});
},

selectTrue:function(callback){ orm.selectTrue(function(err,data){

	if (err) {          
        	callback(err,null);
        } else {               
        	callback(null,data);
        } 		
	});
},

changeBool:function(id){orm.changeBool(id);},

newValue:function(name){orm.newValue(name);}
}

module.exports = burger;