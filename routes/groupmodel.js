var models = require('../models');
var mongoose = require('mongoose');
exports.addGroup = function(req, res)
{
	var newGroup = new models.Group({
		"name": "TEST"+req.query.name
	})
	.save(afterSaving);
	var objectId = mongoose.Types.ObjectId(req.query.UserID);
	console.log("Contact Id: "+objectId)
	function afterSaving(err, data) {
		if (err) {
			console.log(err);
		}
		console.log("New Group:"+data);
		
		var newGroupContact = new models.GroupContact({
			"groupID": data['_id'],
			"contactID" : objectId
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
    .find({"_id": taskID})
    .remove()
    .exec(afterRemoving);

  function afterRemoving(err, groups) {
    if(err) console.log(err);
    res.send(500);
  }
}

//exports.editTask = 