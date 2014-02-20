var mongoose = require('mongoose');

var contactSchema = mongoose.Schema({
    name: String,
    email: {type: String, index:{unique:true}},
    password: String
    
});

var Contact = mongoose.model('Contact', contactSchema);