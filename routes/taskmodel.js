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

	//for(var i = 0; i < lists.length; i++){}

	console.log('add task tired');
	console.log('the json\n' + JSON.stringify(lists[0]['tasks']).replace(/[[\]]/g,''));

	var jStr = JSON.stringify(lists[0]['tasks']).replace(/[[\]]/g,'');
	var taskCount = jStr.match(/name/g).length;
	var newTaskID = taskCount + 1000;
	console.log('taskCount ' + taskCount);

	var newTask = '{\"name\":\"' + req.query.name  + '\" ,\"filters\":\"' + req.query.filters + '\",\"id\":\"'+ newTaskID + '\"}';

	var modTaskField = '[' + jStr + ',' + newTask + ']';

	console.log(modTaskField);

	lists[0]['tasks'] = JSON.parse(modTaskField);

	var finalstr = JSON.stringify(lists);

	fs.writeFile('AllLists.json', finalstr, function (err) {});


	console.log('after parse : ' + JSON.stringify(lists));

	/*new models.Task({
		"name": req.query.name,
		//"filters": req.query.filters
	})
	.save(afterSaving);*/

	function afterSaving(err, data) {
		if (err) {
			console.log(err);
			res.send(500);
		}
		data.send(data);
		//res.redirect('/');
	}

	res.send(newTaskID);
}

function addTaskCallBack(){
}

exports.deleteTask = function(req, res) {
  var taskID = req.params.id;

  models.Task
    .find({"_id": taskID})
    .remove()
    .exec(afterRemoving);

  function afterRemoving(err, tasks) {
    if(err) console.log(err);
    res.send(500);
  }
}

//exports.editTask = 

/*exports.taskExists = function(req, res)
{
	console.log("does the task exist");
	Contact.find({name:'Do dishes'}, function(error, data){
		console.log(data['name']);
		console.log("no data");

	});
}*/