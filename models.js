var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var contactSchema = mongoose.Schema({
    name: String,
    email: {type: String, index:{unique:true}},
    password: String
    
});

exports.Contact = mongoose.model('Contact', contactSchema);

var groupSchema = Schema({
	name: String
});

exports.Group = mongoose.model('Group', groupSchema);

//var GroupObjectId = groupSchema.ObjectId;
var listSchema = new Schema({
    name: String,
    groupID: ObjectId
    
});

exports.List = mongoose.model('List', listSchema);

//var ListObjectId = listSchema.ObjectId;
var taskSchema = Schema({
    name: String,
    listID: ObjectId,
    urgent: Boolean,
    date: { type: Date, default: Date.now }
    
});

exports.Task = mongoose.model('Task', taskSchema);

exports.generateJSONFILES = function(req, res) {
	console.log("Generating JSON FILES");

}