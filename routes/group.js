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
var filterList;
var fakelistList
var mongoose = require('mongoose');
var DEBUG_GROUPLIST = true;
var DEBUG_ABTEST = true;
var DEBUG_LISTLIST = true;

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
  if(DEBUG_GROUPLIST) console.log("======Retrieve Group List======");
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



  exports.defaultGroup = function(req, res){
    var USERID = req.cookies.TBuserID;
     models.Contact.find({'_id' : USERID}).exec(function(err_, data_){
          console.log("CONTACTS FIND DEFAULT");
          console.log(data_);
          var defaultgroupId = data_[0]['defaultgroup'];
          console.log("DEFAULT GROUP ID IS NOW " + defaultgroupId);
          //window.location = window.location.hostname + '/groups/' + defaultgroupId;
          res.writeHead(302,{
            'Location' : '/' + 'groups' + '/'+defaultgroupId
          });
          res.end();
          return;
          

      });

  }
  
  exports.defaultGroupAlt = function(req, res){
    var USERID = req.cookies.TBuserID;
     models.Contact.find({'_id' : USERID}).exec(function(err_, data_){
          console.log("CONTACTS FIND DEFAULT");
          console.log(data_);
          var defaultgroupId = data_[0]['defaultgroup'];
          console.log("DEFAULT GROUP ID IS NOW " + defaultgroupId);
          //window.location = window.location.hostname + '/groups/' + defaultgroupId;
          res.writeHead(302,{
            'Location' : '/' + 'groupsAlt' + '/'+defaultgroupId
          });
          res.end();
          return;
          

      });

  }

  exports.viewGroup = function(req, res) {
  // controller code goes here 
  console.log("=======Entered group.js=======");
  var id = req.params.id;
  var USERID = req.cookies.TBuserID;
  if(USERID==""){
    res.writeHead(302, {
    'Location': '/'
    //add other headers here...
    });
    res.end();
    return;
  }
  var GROUPNAME;
  var USERNAME;
  var PASSWORD;
  var EMAIL;

  // A/B Testing - Parse for URL
  var url = require('url');
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  var url_path = url_parts.path;
  var url_part_parts = url_path.split('/');

  // AB TEST DEBUG STATEMENTS
  if(DEBUG_ABTEST){
    console.log("URL: "+url);
    console.log("URL Parts: ");
    console.log(url_parts);
    console.log("URL Path: ");
    console.log(url_part_parts);
    console.log("URL first part: "+url_part_parts[1]);

    if(url_part_parts[1] == "groups"){
      console.log("===============NORMAL VIEW ================= ")
      testvalue = false;
    }
    else{
      console.log("===============ALTERNATE VIEW ================= ")
      testvalue = true;
    }
  }


  //Query DB
  if(DEBUG_GROUPLIST) console.log("======Retrieve Group List======"); 
  
  console.log("CURRENT USERID: "+ USERID);
  var objectId = mongoose.Types.ObjectId(USERID);
  models.GroupContact.find({"contactID" : objectId}).exec(afterQuery);//returns all the groups contact is in
  


  var resultstring="";
  function afterQuery(err, data) {


    //check if current group id in the url in inside the groups the contact is a part of
    var groupBelongs = false;
    for(var i = 0; i < data.length; i++){
      if(data[i]['groupID'] == id)
        groupBelongs = true;
    }
    if(!groupBelongs)
    {
      //if the group doesn't belong to the contact then redirect to contact's default group
      console.log('THE CONTACTID IS NOW');
      console.log(objectId);
      models.Contact.find({'_id' : USERID}).exec(function(err_, data_){
          console.log("CONTACTS FIND DEFAULT");
          console.log(data_);
          var defaultgroupId = data_[0]['defaultgroup'];
          console.log("DEFAULT GROUP ID IS NOW " + defaultgroupId);
          //window.location = window.location.hostname + '/groups/' + defaultgroupId;
          res.writeHead(302,{
            'Location' : '/' + url_part_parts[1] + '/'+defaultgroupId
          });
          res.end();
          return;
          

      });


    }
    else{
    if(DEBUG_GROUPLIST) console.log("=====Finished Retrieving Groups======");

    if(err) console.log(err);
    if(DEBUG_GROUPLIST) console.log("Query - Group List: "+data);
    var groupqueryRESULT = data;
    var ALLGROUPIDS = [];
    count = groupqueryRESULT.length;
    if(DEBUG_GROUPLIST) console.log("Result Count: "+count);

    resultstring += '[';

    for(var i=0;i<count;i++){
      if(DEBUG_GROUPLIST) console.log("Group List (Loop "+i+" of "+count+"): " + resultstring);
      resultstring += '{' + '\"name\":\"' + groupqueryRESULT[i]['groupID'] + '\",\"id\":\"' + groupqueryRESULT[i]['groupID']  + '\"}';
      
      ALLGROUPIDS.push(groupqueryRESULT[i]['groupID']);

      if((i+1)!=groupqueryRESULT.length){
        resultstring += ',';
        //ALLGROUPIDS += ',';
      }

    }
    resultstring +=']';
    if(DEBUG_GROUPLIST) {
      console.log("ResultString: ");
      console.log(resultstring);
    }
    var groupList2 = JSON.parse(resultstring);
    //groupList2 = JSON.parse(groupList2);
    console.log("Check1: Reached after the for loop");

//Query DB
console.log("======Retrieve Group Names======");
console.log("CURRENT USERID: "+ USERID);
var objectId = mongoose.Types.ObjectId(USERID);


  //groupList = JSON.stringify(groupList);
  console.log("Group List: ");
  console.log(groupList2);
  

  //objectId = mongoose.Types.ObjectId(groupList2[i]['id']);
  //console.log("Query For: ");
  //console.log(groupList2[i]);
  
  models.Group.find({"_id" : { $in: 
    ALLGROUPIDS
  }
  }).exec(function(err, data2){
  console.log("=====Finished Retrieving Group Name======");
  console.log("Query - Group Name: ");
  console.log(data2);
  if(err){
    console.log("Error: ");
    console.log(err);
  }
    //groupList2[i]['name'] = data[0]['name'];
    GROUPNAME = id;
    for(var i = 0; i<groupList2.length;i++){
      for( var j = 0; j<data2.length;j++){
        if(groupList2[i]['id'] == data2[j]['_id']) groupList2[i]['name'] = data2[j]['name'];
        if(data2[j]['_id'] == id) GROUPNAME = data2[j]['name'];

      }
      

    }

    //retrieveFakeContactList();
    retrieveFakeAnnouncementList();
      //retrieveFakeListList();

      //GROUPNAME = id;//the id belongs to the current group

      groupid_ = mongoose.Types.ObjectId(id);

      models.List.find({"groupID" : groupid_

    }).exec(function(listerr, listdata){
        //console.log("inside query list " + id);
        if (listerr) {
          console.log(listerr);
        }
          //res.send();
          //console.log('all list data');
          //console.log(listdata);


          LISTIDS=[];

          for(var i = 0; i < listdata.length; i++)
          {
            LISTIDS.push(listdata[i]['_id']);
          }

        //query all the tasks for the lists now
        models.Task.find({"listID" : { $in: LISTIDS}}).exec(function(taskerr, taskdata){
          console.log("inside query tasks ")
          console.log(taskdata);
                    //listdata = JSON.parse(listdata);
                    //taskdata = JSON.parse(taskdata);
                    listList = "["
                    for(var i = 0; i < listdata.length; i++)
                    {

                        //look for the task for that list
                        var taskList = "[";
                        var firstTask = true;

                        for(var j = 0; j < taskdata.length; j++)
                        {
                          //console.log("inner for " + j);
                          //console.log("taskdata : " + taskdata[j]['listID']);
                          //console.log("listdata : " + listdata[i]['_id']);
                          //console.log("type of task : " + typeof taskdata[j]['listID']);
                          //console.log("type of list : " + typeof listdata[i]['_id']);

                          //console.log("true/false : " + (taskdata[j]['listID'].toString() == listdata[i]['_id'].toString()));

                          if(taskdata[j]['listID'].toString() == listdata[i]['_id'].toString())
                          {
                            console.log("Task status: "+ taskdata[j]['status']);
                           if(taskdata[j]['status'].toString()=='true'){
                            continue;
                            }
                            if(!firstTask)
                            {
                              taskList+=",";
                            }
                            firstTask = false;

                            console.log("YES " + listdata[i]['name'] )
                            taskList += "{\"id\":" + "\"" + taskdata[j]['id'] + "\",";
                            taskList += "\"name\": " +  "\"" + taskdata[j]['name'] + "\"}";

                             // if(j != taskdata.length - 1)
                           }

                         }
                         taskList+="]";

                         console.log("the whole taskList" + taskList);

                         listList+="{";
                         listList+="\"id\":\"" + listdata[i]['_id'] + "\",";
                         listList+="\"name\":\""+listdata[i]['name'] + "\",";
                         listList+="\"tasks\": " + taskList;
                         listList+="}"
                         if(i != listdata.length -1) listList+=","
                       }
                     listList+="]";


                    models.GroupContact.find({"groupID" : groupid_}).exec(function(contactsingrouperr, contactsingroup){

                              CONTACTIDS=[];

                              for(var i = 0; i < contactsingroup.length; i++)
                              {
                                CONTACTIDS.push(contactsingroup[i]['contactID']);
                              }
                              
                              //console.log("CONCTACTIDS: ");
                              //console.log(CONTACTIDS);

                              console.log("Contacts in Group Length: "+ contactsingroup.length);

                              contactList="[";
                              for(var i = 0; i<contactsingroup.length; i++){
                                console.log("in for loop");
                                contactList+="{";
                                contactList+="\"id\":\"" + contactsingroup[i]['contactID'] + "\",";
                                contactList+="\"name\":\""+contactsingroup[i]['contactID'] + "\""; 
                                contactList+="}"; 
                                if(i != contactsingroup.length -1) contactList+=",";
                              }
                              contactList+="]";
                              contactList = JSON.parse(contactList);
                              console.log("Querying for names - ");
                              

                              models.Contact.find({"_id" : { $in: CONTACTIDS}}).exec(function(contactnamesingrouperr, contactnamesingroup){

                                        console.log("Query Result for Contacts in Group: ");
                                        console.log("Contactnamesingroup: ");
                                        console.log(contactnamesingroup);
                                        console.log("Contacts in group:");
                                        console.log(contactsingroup);


                                        for(var i = 0; i<contactList.length;i++){
                                          for( var j = 0; j<contactnamesingroup.length;j++){
                                            if(contactnamesingroup[j]==null){
                                              continue;
                                            }
                                            if(contactList[i]['id'] == contactnamesingroup[j]['_id']) contactList[i]['name'] = contactnamesingroup[j]['name'];
                                            if(contactnamesingroup[j]['_id'] == USERID) {
                                              USERNAME = contactnamesingroup[j]['name'];
                                              PASSWORD = contactnamesingroup[j]['password'];
                                              EMAIL = contactnamesingroup[j]['email'];
                                            }
                                          }
                                        }

                                         console.log('The Group : ' + GROUPNAME);
                                         console.log('========== Group List ===========');
                                         console.log(groupList2);
                                         console.log(' List List '+ listList);
                                         console.log('========== Contact List Result ==========');
                                         console.log(contactList);
                                         console.log('announcementList' + announcementList);


                                        models.Filter.find({"contactID": objectId}).exec(function(filtererr, filterdata){
                                                
                                                if(filtererr)console.log(filtererr);
                                                console.log('=======filters=======');
                                                console.log(filterdata);
                                                filterList = "["
                                                for(var i =0; i<filterdata.length; i++){
                                                    
                                                    filterList += "{ \"name\": \""+filterdata[i]['name'] +"\",";
                                                    filterList += "\"xdays\":\"" + filterdata[i]['xdays'] +"\",";
                                                    filterList += "\"priority\":\"" + filterdata[i]['priority'] +"\",";
                                                    filterList += "\"dueDate\":\"" + filterdata[i]['dueDate'] + "\",";
                                                    filterList += "\"contactID\":\"" + filterdata[i]['contactID'] + "\"}";

                                                    if(i!=filterdata.length-1)
                                                      filterList+=",";

                                                }
                                                filterList +="]";
                                                var urlname = (url_part_parts[1]).toString();
                                                res.render('groups',{
                                                  'projectName': GROUPNAME,
                                                  'groups': (groupList2),
                                                  'announcements':JSON.parse(announcementList),
                                                  'contacts': (contactList),
                                                  'contactName': USERNAME,
                                                  'password': PASSWORD,
                                                  'email': EMAIL,
                                                  'lists':JSON.parse(listList),
                                                  'filters':JSON.parse(filterList),
                                                  'test':testvalue,
                                                  'urlname': urlname
                                                  //'fakelists': JSON.parse(fakelistList),
                                                });

                                        });//end find filters
                            
                            });//end find contact

                });//end find groupcontacts
      
      });//end find tasks

});//end find lists


});
}




}
console.log("End of group.js");
};