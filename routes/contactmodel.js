var models = require('../models');

/*var mongoose = require('mongoose');

var contactSchema = mongoose.Schema({
    name: String,
    email: {type: String, index:{unique:true}},
    password: String
    
});

var Contact = mongoose.model('Contact', contactSchema);
var newContact = new Contact({name:"", email:"", password:""});*/

/*exports.saveContact = function(name_, email_, password_)
{
	//console.log("saving contacts");
	//var name_ = "Scott Klemmer";
	//var email_ = "sk@gmail.com";
	//var password_= "1234";
	var currContact = new Contact({name: name_, email: email_, password:password_});

	currContact.save(function(err, currContact)
	{
		if(err)
			console.log("there's an error in contacts");
	});
}*/

exports.contactExists = function(req, res)
{
	var data_;
	var email_ = req.query.email;
	var password_ = req.param.password;
	console.log("does the contact exist");
	models.Contact.find({email:email_}, function(error, data){

		//console.log(data['email']);
		//console.log("no data");
		//data_ = data.email;
		if(error) console.log(error);
    	res.json(data[0]);

	});
	console.log("found something");
	//console.log("yohoho" + newContact.name);
}

exports.AddContactToDB = function(req, res)
{
	var USERID;
	var email_ = req.query.email;
	var password_ = req.query.password;
	console.log("pass" + password_);
	console.log("does the contact exist");
	var newContact = new models.Contact({
		"name": "user",
		"email": email_,
		"password":password_
	});
	newContact.save(function (err, data) {	
		console.log("Added New Contact:"+data);
		//res.json(data);

		//res.send();

		/*********************
		* Copied Code From GroupModel.js
		**********************/
		
		var newGroup = new models.Group({
			"name": "My Default Group"
		})
		.save(function (err, data2) {
			//res.json(data2);
			console.log("Contact Id: "+data['_id'])
			if (err) {
				console.log(err);
			}
			console.log("New Group:"+data2);
			
			var newGroupContact = new models.GroupContact({
				"groupID": data2['_id'],
				"contactID" : data['_id']
			}).save(function (err, data3) {	
				console.log("New GroupContact:"+data3);
				res.json(data3);
			});

			//res.json(data);
			//res.redirect('/');
			
		});
	
	});
	//////////////////END COPY

	console.log("found something");
	//console.log("yohoho" + newContact.name);
	//  $.get("/AddNewUser", {email:"sk2@gmail.com", password:"1234"},func1); ADD THIS TO FRONT END
}

exports.AddContactToGroup = function(req, res)
{
	var email_ = req.query.email;
	var password_ = req.param.password;
	console.log("does the contact exist");
	models.Contact.find({email:email_}, function(error, data){

		//console.log(data['email']);
		//console.log("no data");
		//data_ = data.email;
		if(error) console.log(error);
    	res.json(data[0]);

	});
	console.log("found something");
	//console.log("yohoho" + newContact.name);
}
	

