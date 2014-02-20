var models = require('../models');

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
	console.log(task_data);

	new models.Task({
		"name": req.query.name,
		"filters": req.query.filters
	})
	.save(afterSaving);

	function afterSaving(err) {
		if (err) {
			console.log(err);
			res.send(500);
		}
		//res.redirect('/');
	}
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