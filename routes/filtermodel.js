var models = require('../models');
var mongoose = require('mongoose');

exports.addFilter = function(req, res)
{
	var name = req.query.filterName;
	var xdays = req.query.xDays;
	var priority = req.query.priority;
	var dueDate = req.query.dueDate;
	var contactID = req.query.contactID;

	console.log("inside addFilter" + name + xdays + priority + dueDate);
	console.log("contactID: " + contactID);

	var newFilter = new models.Filter({
		"name": name,
		"xdays": xdays,
		"priority": priority,
		"dueDate": dueDate,
		"contactID": contactID
	}).save(function(err, data){

		if(err) console.log(err);

		res.json(data);
	})
}

exports.filterTasks = function(req, res){
	var priority = req.query.priority_;
	var allLists = [];
	var groupid = req.query.groupID;
	var xdays = req.query.xdays_;
	var start = new Date();
	var end = new Date(new Date().setDate(new Date().getDate()+xdays));

	models.List.find({"groupID": groupid}).exec(afterfindList);

	function afterfindList(err, data)
	{
		for(var i = 0; i < data.length; i++)
        allLists.push(data[i]['_id'])
    }
		if(err) console.log(err);


				models.Task.find({"listID": {$in: allLists}, "priority": priority, "duedate": {$gte:start, $lt:end}, "status": false}).exec(function(terr, tdata){
				
					if(terr)console.log(terr);
					res.send(tdata);
				});
}


//filter by!

exports.deleteFilter = function(req, res){
	var filtername = req.query.name;
	var contactID = req.query.contactID;

	models.Filter.remove({"name": filtername, "contactID": contactID}).exec(function(err, data){
		if(err)console.log(err);
		res.send();
	});
}