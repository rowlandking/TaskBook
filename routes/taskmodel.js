var mongoose = require('mongoose');
var models = require('../models');
var lists = require('../AllLists.json');
var fs = require('fs');
/*var taskSchema = new mongoose.Schema({
    name: String,
    filters: String,
    id: {type: Number, index:{unique:true}}
    
});

var Task = mongoose.model('Task', taskSchema);
*/
exports.addTask = function(req, res)
{
	var task_data = req.body;
	var listID = req.query.listid;
	console.log(task_data);

	new models.Task({
		"name": req.query.name,
		"priority": "0",
		"status": "false",
		"listID": req.query.listid
	})
	.save(afterSaving);

	console.log("listid: "+req.query.listid);
	function afterSaving(err, data) {
		if (err) {
			console.log(err);
			res.send(500);
		}
		res.json(data);
	
	}

	
}

function addTaskCallBack(){
}

exports.deleteTask = function(req, res) {
  var taskID = req.query.taskid;
  console.log("task ID is..."+taskID);
  models.Task
    //.find()
    .remove({"_id": taskID})
    .exec(afterRemoving);

  function afterRemoving(err, tasks) {
    if(err) console.log(err);
    res.send(500);
  }
}

exports.getTaskInfo = function(req, res) {
	var taskID = req.query.taskid;

	models.Task
		.find({ "_id": taskID })
		.exec(afterGetting);

	function afterGetting(err, data) {
		if (err) {
			console.log(err);
			res.send(500);
		}
		res.json(data[0]);
	}
}

exports.updateTaskInfo = function(req, res) {
	var taskID = req.query.taskid;
	var taskTitle = req.query.tasktitle;
	var taskDescription = req.query.taskdescription;
	var taskStatus = req.query.taskstatus;
	var taskPriority = req.query.taskpriority;
	var taskDueDate = req.query.taskduedate;
	var updateData = { name: taskTitle, description: taskDescription, status: taskStatus, priority: taskPriority, duedate: taskDueDate };
	models.Task.update({_id: mongoose.Types.ObjectId(taskID)}, updateData, function(err, data) {
		if (err) console.log(err);
		console.log('data');
		res.send(data);
	});
}

/*exports.taskExists = function(req, res)
{
	console.log("does the task exist");
	Contact.find({name:'Do dishes'}, function(error, data){
		console.log(data['name']);
		console.log("no data");

	});
}*/