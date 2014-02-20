var mongoose = require('mongoose');

var contactSchema = mongoose.Schema({
    name: String,
    email: {type: String, index:{unique:true}},
    password: String
    
});

exports.Contact = mongoose.model('Contact', contactSchema);

var groupSchema = mongoose.Schema({
	name:{type: String, index:{unique:true}}
});

exports.Group = mongoose.model('Group', groupSchema);

