var models = require('../models');

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