var mongoose = require('mongoose');

var taskSchema = mongoose.Schema({
    name: String,
    //filters: String,
    //id: {type: Number, index:{unique:true}}
    
});

var Task = mongoose.model('Task', taskSchema);

exports.addTask = function(req, res)
{
	console.log("saving contacts");

	//var name_ = "Scott Klemmer";
	//var email_ = "sk@gmail.com";
	//var password_= "1234";
	var currTask = new Task({name: req.query.name/*, filters: null, id: 5*/});

	currTask.save(function(err, currTask)
	{
		if(err)
			console.log("there's an error in tasks");
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