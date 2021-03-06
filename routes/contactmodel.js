var models = require('../models');
var mongoose = require('mongoose');
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
		console.log("found something");
	});

	//console.log("yohoho" + newContact.name);
}

exports.AddContactToDB = function(req, res)
{
	var USERID;
	var email_ = req.query.email;
	var password_ = req.query.password;
	var name_= req.query.namefield;
	console.log("name: "+name_);
	console.log("pass" + password_);
	console.log("does the contact exist");
	//var objectId = mongoose.Types.ObjectId('000000000000');
	var newContact = new models.Contact({
		"name": name_,
		"email": email_,
		"password":password_,
		"defaultgroup": null
	});
	newContact.save(function (err, data) {	
		if(data==null){
			res.send("UserExists");
		}
		else{
		console.log("Added New Contact:"+data);
		/*********************
		* Copied Code From GroupModel.js
		**********************/
		
		var newGroup = new models.Group({
			"name": "My First Group"
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
				"contactID" : data['_id'],
			}).save(function (err, data3) {	
				console.log("New GroupContact:"+data3);


				//Update Default group
				var updateData = {
				  defaultgroup: data2['_id']
				};

				//delete upsertData._id;

				models.Contact.update({_id: data['_id']},updateData, function(err3,affected) {
				  
					if (err3) {
						console.log(err);
					}
				  console.log('affected rows %d', affected);
				  res.json(data3);
				});				
			});	
		});
	}
	});
	//////////////////END COPY

	console.log("Finished adding to db");
	//console.log("yohoho" + newContact.name);
	//  $.get("/AddNewUser", {email:"sk2@gmail.com", password:"1234"},func1); ADD THIS TO FRONT END
}

exports.updateContactInfo = function(req, res) {
	var email_ = req.query.email;
	var password_ = req.query.password;
	var name_= req.query.namefield;
	var updateData = { name: name_, email: email_, password: password_ };
	models.Contact.update( {email : email_}, updateData, function(err, data) {
		if (err) console.log(err);
		console.log('data');
		res.send(data);
	});
}

exports.AddContactToGroup = function(req, res)
{
	var email_ = req.query.email;
	email_ = decodeURIComponent(email_);
	//var password_ = req.param.password;
	var groupid = req.query.groupid;
	  var objectId = mongoose.Types.ObjectId(groupid);
	console.log("does the contact exist: " + email_);
	models.Contact.find({email:email_}, function(error, data){

		//console.log(data['email']);
		//console.log("no data");
		//data_ = data.email;
		if(error) console.log(error);
		if(data[0]==null){
    		res.send("UserDoesNotExist");
    		console.log("UserDoesNotExist");
    	}
    	else{
    		// Need to check if already in group

    		models.GroupContact.find({"contactID" : data[0]['_id']},{groupID : groupid}).exec(function(err, result){
    			if(result[0] ==null){
    				res.send("AlreadyInGroup")
    			}
    			else{
		    		console.log("Email Found");
		    		console.log("Group ID: " + objectId);
		    		console.log("Contact ID: " + data[0]['_id']);
		    		console.log("Email: " + email_);
		    		var newGroupContact = new models.GroupContact({
						"groupID": objectId,
						"contactID" : data[0]['_id'],
					}).save(function (err, data3) {	
						console.log("New GroupContact:"+data);
						res.json(data);
					});
				}
    		});
    	}

	});
	console.log("found something");
	//console.log("yohoho" + newContact.name);
}
	

