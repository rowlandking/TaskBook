var models = require('../models');
var mongoose = require('mongoose');
exports.addGroup = function(req, res)
{
	var newGroup = new models.Group({
		"name": req.query.name
	})
	.save(afterSaving);
	var objectId = mongoose.Types.ObjectId(req.cookies.TBuserID);
	console.log("Contact Id: "+objectId)
	function afterSaving(err, data) {
		if (err) {
			console.log(err);
		}
		console.log("New Group:"+data);
		
		var newGroupContact = new models.GroupContact({
			"groupID": data['_id'],
			"contactID" : objectId,
		}).save(afterSaving2);

		function afterSaving2(err, data2) {	
			console.log("New GroupContact:"+data2);
			res.json(data2);
		}



		//res.json(data);
		//res.redirect('/');
	}

}

function addGroupCallBack(){
}

exports.deleteGroup = function(req, res) {
  var groupID = req.params.id;

  models.Group
    .find({"_id": groupID})
    .remove()
    .exec(afterRemoving);

  function afterRemoving(err, groups) {
    if(err) console.log(err);
    res.send(500);
  }
}

exports.editGroupName = function(req, res){

	var groupID = req.query.groupid;
	var newTitle = req.query.name;
	models.Group.update(
		{"_id": groupID},
		{
			$set:{"name": newTitle}
		}
	).exec(function(err, data){
		 if(err) console.log(err + 'there has been an err dude');
         res.send(500);
	});
	
}


//leave group
exports.leaveGroup = function(req, res){
	var groupID = req.query.groupid;
	var contactID = req.query.contactid;

	models.GroupContact
	.remove({"groupID": groupID, "contactID": contactID})
	.exec(function(err, data){
		 if(err) console.log(err + 'there has been an err dude');
		 res.send(500);
	});

}

//return the groups the contact is in, check how many
exports.findGroups = function(req, res){
	//var groupID = req.query.groupid;
	var contactID = req.query.contactid;

	models.GroupContact.
	find({"contactID": contactID}).
	exec(function(err, data){
		if(err) console.log(err);

		res.json(data);
	})

}

//exports.editTask = 