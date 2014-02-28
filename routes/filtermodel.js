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
	//var filterContent = req.query.filtercontent;
	//var dueDate = req.query.dueDate;
	var priority = req.query.priority_;
	var allLists = [];
	var groupid = req.query.groupID;
	//var xdays = req.query.xdays_;
	//var dd = req.query.dueDate_;
	//console.log("dd is : " + dd);
	//var tempdd = dd.split("/");
	//var date_ = new Date(dd);

	//var dueDate = date_.toISOString();
	//var finalDate = new Date(dueDate);
	var xdays = req.query.xdays_;
	var start = new Date();
	var end = new Date(start.setDate(start.getDate()+xdays));
	console.log("start " + start);
	console.log("end " + end);

	models.List.find({"groupID": groupid}).exec(afterfindList);

	function afterfindList(err, data)
	{
		for(var i = 0; i < data.length; i++){
        allLists.push(data[i]['_id'])
    }
		if(err) console.log(err);

				console.log("++++++++inside filter tasks outside find+++++++");
				console.log(allLists);

				//models.Task.find({"listID": {$in: allLists}, "priority": priority}).exec(function(terr, tdata){
				//models.Task.find({"duedate": dd}).exec(function(terr, tdata){
				models.Task.find({"duedate": {$gte:start, $lt:end}}).exec(function(terr, tdata){
				
					if(terr)console.log(terr);
					console.log("inside filter model======filter tasks");
					console.log(tdata);
					res.send(tdata);
				});
	}
}

//filter by!