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
  var listID = req.params.id;
  var objectId = mongoose.Types.ObjectId(req.cookies.TBuserID);

  models.List
    .find({"_id": objectId})
    .remove()
    .exec(afterRemoving);

  function afterRemoving(err, groups) {
    if(err) console.log(err);
    res.send(500);
  }
}