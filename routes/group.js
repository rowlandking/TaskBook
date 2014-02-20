var lists = require('../AllLists.json');
var groups = require('../AllGroups.json');
var REALDATA = false;
var groupList;
var announcementList;
var contactList;
var listList;
var fakelistList

function retrieveFakeGroupList(){
    groupList = JSON.stringify([
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
    ]);
}
function retrieveFakeAnnouncementList(){
  announcementList =  JSON.stringify([
      { "type": "Reminder",
        "name": "Buy Toilet Paper",
        "id":"1"
      },
      { 
        "type": "Reminder",
        "name": "Clean Toilet",
        "id":"2"
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
  listList = JSON.stringify([
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

    ]);
}

function getUserID(){
  return 1;
}
function retrieveGroupList(id){
  //Apply Filters

  //Query DB

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

  if(REALDATA ==false){
  retrieveFakeGroupList();
  retrieveFakeAnnouncementList();
  //retrievelistList();
  retrieveFakeListList();
  retrieveFakeContactList();
  }
  else{
    var userID = getUserID();

    // Get the groups that the user is in
    groupList = retrieveGroupList(userID);

    //Get the lists in the currently group
    listList = retrieveCurrentGroupList(id);

    //Get Announcement List that the user has
    announcementList = retrieveAnnouncements(id);

    //Get Contact List
    contactList = retrieveContacts(id);

  }
  var groupName;
  
  for(var i = 0; i<groups.length;i++){

    if(parseInt(groups[i]['id'])==parseInt(id)){
      groupName = groups[i]['name'];
      break;
    }
  }

  console.log('The Group : ' + groupName);
  console.log(JSON.parse(groupList));
  console.log(fakelistList);
  res.render('groups',{
  	'projectName': groupName,
  	'groups': JSON.parse(groupList),
    'announcements':announcementList,
    'contacts': JSON.parse(contactList),
    'lists':JSON.parse(listList),
    //'fakelists': JSON.parse(fakelistList),
  });
};