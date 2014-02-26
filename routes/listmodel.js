var models = require('../models');
var mongoose = require('mongoose');

exports.findLists = function(req, res){
	var groupID = req.params.groupID;
    var objectId = mongoose.Types.ObjectId(groupID);

	models.List.find({"_id": groupID}).exec(afterfindList);

	function afterfindList(err, data)
	{
		if(error) console.log(err);
		res.json(data[0]);
	}
	
}

exports.addList = function(req, res)
{
	var groupid_ = req.query.groupid;
	//console.log('inside addList : the groupid is :  ' + groupid_);
	var newList = new models.List({
		"name": req.query.name,
		"groupID" :  mongoose.Types.ObjectId(groupid_)
	})
	.save(afterSaving);
	var objectId = mongoose.Types.ObjectId(req.cookies.TBuserID);
	console.log("Group Id: "+objectId)
	function afterSaving(err, data) {
		if (err) {
			console.log(err);
		}
		//console.log("New List:"+data);
		res.json(data);
	}
//return the listid
}

function addListCallBack(){
}

exports.deleteList = function(req, res) {
  var listID = req.query.id;
  var objectId = mongoose.Types.ObjectId(req.cookies.TBuserID);
  console.log("inside deleteList" + listID);
  models.List
    //.find({"_id": objectId})
    .remove({"_id": listID})
    .exec(afterRemoving);

  function afterRemoving(err, groups) {
    	if(err) console.log(err);

    	//res.send(500);
    	//remove all tasks associated with that list
    	models.Task.remove(models.Task.find({"listID": listID})).exec(function(taskerr, tasks){
    		console.log("all the tasks " + tasks);
    		if(taskerr) console.log(taskerr);
    		res.send();
    	});
  }
}