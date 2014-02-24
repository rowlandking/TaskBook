var models = require('../models');
var lists = require('../AllLists.json');
var groups = require('../AllGroups.json');
var models = require('../models');
var mongoose = require('mongoose');

var REALDATA = false;
var groupList;
var announcementList;
var contactList;
var listList;
var fakelistList
var mongoose = require('mongoose');
function retrieveFakeGroupList(){
    groupList = JSON.stringify(groups);/*[
      { "name": "CSE 170 Project",
        "id": "1"
      },
      { "name": "CSE 130",

        "id": "2"
      },  
      { "name": "Apartment 3449",
        "id": "3"
      },
      { "name": "Book Club",
        "id": "4"
      }
    ]);*/
}
function retrieveFakeAnnouncementList(){
  announcementList =  JSON.stringify([
      { "type": "Reminder",
        "name": "Buy Toilet Paper",
        "groupid":"1",
        "taskid":"1"
      },
      { 
        "type": "Reminder",
        "name": "Clean Toilet",
        "groupid":"2",
        "taskid":"2"
      }
    ]);
}
function retrieveFakeContactList(){
  contactList = JSON.stringify([
          {
            "name": "Thuy Pham",
            "id": "1"
          },
          {
            "name": "Carla Sun",
            "id": "2"
          },
          {
            "name": "Tim Pham",
            "id": "3"
          },
          {
            "name": "Thuy Tran",
            "id": "4"
          },
          {
            "name": "Diana Pham",
            "id": "5"
          },
          {
            "name": "Marly Phung",
            "id": "6"
          },
          {
            "name": "David Phan",
            "id": "7"
          },
          {
            "name": "Troy Dam",
            "id": "8"
          }

    ]);
}

function retrieveFakeListList(){
  listList = JSON.stringify(lists);
  /*JSON.stringify([
    {
      "id":"100",
      "name":"Chores",
      "tasks":[
      {
        "name":"Wash Dishes",
        "filters": "ready",
        "id":"1000"
      },
      {
        "name":"Take Out Trash",
        "filters": "ready",
        "id":"1001"
      },
      {
        "name":"Clean Dog",
        "filters": "ready",
        "id":"1002"
      }
      ]
    },
    {
    "id":"101",
    "name":"Schoolwork",
      "tasks":[
      {
        "name":"Turn in essay",
        "id":"1003"
      },
      {
        "name":"Read Chapter 1",
       "id":"1004"
      },
      {
        "name":"Finish lab",
        "id":"1005"
      }
      ]
    }

    ]);*/
}



function getUserID(){
  return req.cookies.TBuserID;
}
function retrieveGroupList(userid){
  //Apply Filters

  //Query DB
  console.log("======Retrieve Group List======");
  console.log("UserId: "+ userid);
  var objectId = mongoose.Types.ObjectId(userid);
  models.GroupContact.find({"contactID" : objectId}).exec(afterQuery);
  

  var groupqueryRESULT;
  var resultstring="";
  function afterQuery(err, data) {
    console.log("=====Finished Retrieving======");
    if(err) console.log(err);
    console.log("Query - Group List: "+data);

    groupqueryRESULT = data;
    count = groupqueryRESULT.length;
    for (var i = 0; i < groupqueryRESULT.length; i++)
    {
      //console.log("Only groupID: "+groupqueryRESULT[i]['groupID']);
      models.Group.find({"_id" : groupqueryRESULT[i]['groupID']}).exec(
      function (err, data) {
        resultstring += '{"name":"'+data[0]['name']+'","id":"'+data[0]['id']+'"},';
        count--;
        console.log("result: ");
        console.log(resultstring);
      });
    }
    console.log("Check1: Reached after the for loop");
    //res.json(projects[0]);
    if (count == 0) {
      console.log("Check2");
      groupDone = true;
      console.log("count: "+count);
      resultstring = resultstring.substring(0, resultstring.length - 1);
      return resultstring;
    }
  }

  //for(var i = 0; i<groupqueryRESULT.length;i++){
   // models.Group.find({"contactID" : objectId}).exec(afterQuery);
  //}

  // Return JSON list from DB
  return JSON.stringify([
      { "name": "CSE 170 Project",
        "image": "lorempixel.people.1.jpeg",
        "id": "1"
        
      },
      { "name": "CSE 130",
        "image": "lorempixel.city.1.jpeg",
        "id": "2"
      },
      { "name": "Apartment 3449",
        "image": "lorempixel.technics.1.jpeg",
        "id": "3"
      },
      { "name": "Book Club",
        "image": "lorempixel.abstract.1.jpeg",
        "id": "4"
      }
    ]);
}

function retrieveListList(id, callbacklist){
  var list_url = '/listmodel/'+id;
  var objectId = mongoose.Types.ObjectId(id);
  //function callback(){}
  console.log('inside retrieve ' + id);
  //$.get(list_url, callback);
  //var data_;
  models.List.find({"groupID": objectId}).exec(afterfindList);
  var jsonString = "";
  function afterfindList(err, data)
  {
    if(err) console.log(err);
    //res.json(data[0]);
    //data_ = data;
    //console.log(JSON.stringify(data[0].toObject));
    //return data[0];//.toObject();
    console.log('afterfindList\n');
    console.log(data);

    jsonString = '[';
    for(var i = 0; i < data.length; i++)
    {
      jsonString+='{ \"id\":' + data[i]['_id'] + ','
                       + '\"name\":' + data[i]['name'] + ','
                       + "\"tasks\": }";

      if(i != data.length-1)
        jsonString+=',';

    }

    jsonString+=']';
    console.log('jsonstring');
    console.log(jsonString);
    //return jsonString;
    callbacklist(jsonString);
    //res.send();
  }
    //console.log(JSON.stringify(data_[0]));



}

function retrieveAnnouncements(id){
  return JSON.stringify([
      { "type": "Reminder",
        "name": "Buy Toilet Paper"
      },
      { 
        "type": "Reminder",
        "name": "Clean Toilet"
      }
    ]);
}
function retrieveContacts(id){


  console.log("does the contact exist");
  var objectId = mongoose.Types.ObjectId(id);
  models.Contact.find({"_id":objectId}, function(error, data){

    //console.log(data['email']);
    //console.log("no data");
    //data_ = data.email;
    if(error) console.log(error);
    console.log(data);

  });
  console.log("found something");





  return JSON.stringify([
          {
            "name": "Thuy Pham",
            "id": "1"
          },
          {
            "name": "Carla Sun",
            "id": "2"
          },
          {
            "name": "Tim Pham",
            "id": "3"
          },
          {
            "name": "Thuy Tran",
            "id": "4"
          },
          {
            "name": "Diana Pham",
            "id": "5"
          },
          {
            "name": "Marly Phung",
            "id": "6"
          },
          {
            "name": "David Phan",
            "id": "7"
          },
          {
            "name": "Troy Dam",
            "id": "8"
          }

    ]);
}
exports.viewGroup = function(req, res) {
  // controller code goes here 
  console.log("group.js");
  var id = req.params.id;
  var userid = req.cookies.TBuserID;
  var groupName;



  //Query DB
  console.log("======Retrieve Group List======");
  console.log("UserId: "+ userid);
  var objectId = mongoose.Types.ObjectId(userid);
  models.GroupContact.find({"contactID" : objectId}).exec(afterQuery);
  


  var resultstring="";
  function afterQuery(err, data) {
    console.log("=====Finished Retrieving Groups======");
    if(err) console.log(err);
    console.log("Query - Group List: "+data);
    var groupqueryRESULT = data;
    count = groupqueryRESULT.length;
    console.log("Result Count: "+count);
    /*
    for (var i = 0; i < groupqueryRESULT.length; i++)
    {
      //console.log("Only groupID: "+groupqueryRESULT[i]['groupID']);
      models.Group.find({"_id" : groupqueryRESULT[i]['groupID']}).exec(
      function (err, data) {
        resultstring += '{"name":"'+data[0]['name']+'","id":"'+data[0]['id']+'"},';
        count--;
        console.log("result: ");
        console.log(resultstring);
      });
    }
    */
    resultstring += '[';
    for(var i=0;i<count;i++){
      console.log("Group List (Loop "+i+" of "+count+"): " + resultstring);
      resultstring += '{' + '\"name\":\"' + groupqueryRESULT[i]['groupID'] + '\",\"id\":\"' + groupqueryRESULT[i]['groupID']  + '\"}';
      if((i+1)!=groupqueryRESULT.length) resultstring += ',';
    }
    resultstring +=']';
    console.log("ResultString: " + resultstring);
    groupList = resultstring;
    console.log("Check1: Reached after the for loop");
    //res.json(projects[0]);
    /*
    if (count == 0) {
      console.log("Check2");
      groupDone = true;
      console.log("count: "+count);
      resultstring = resultstring.substring(0, resultstring.length - 1);
      return resultstring;
    }*/

    //retrieveFakeContactList();
    retrieveFakeContactList();
    retrieveFakeAnnouncementList();
    retrieveFakeListList();

    groupName = id;
      console.log('The Group : ' + groupName);
      console.log('GroupList '+  (groupList));
      console.log('Fake List '+ listList);
      console.log('Contact List '+ contactList);
      console.log('announcementList');

      res.render('groups',{
        'projectName': groupName,
        'groups': JSON.parse(groupList),
        'announcements':JSON.parse(announcementList),
        'contacts': JSON.parse(contactList),
        'lists':JSON.parse(listList),
        //'fakelists': JSON.parse(fakelistList),
      });
  }
  console.log("End of group.js");
  };