//var models = require('../models');
//var mongoose = require('mongoose');

var taskStorage = new Array(); 
var listStorage = new Array();
var S_TASKNAME = 1;
var S_LISTNAME = 1;
var S_TASKID = 0;
var S_LISTID = 0;
var S_DESCRIPTION = 2;
var S_ASSIGNEDTO = 3;
var S_TASKLIST = 2;

var FILTERTYPE;
var SORTTYPE;

// listStorage[INDEX]=[S_LISTID,S_LISTNAME,S_TASKLIST]
// listStorage[INDEX][S_TASKLIST] = [S_TASKID, S_TASKNAME, S_DESCRIPTION, S_ASSIGNEDTO, __,___]
function setupFakeStorage(){
  taskStorage[0]=["1000","Wash Dishes","description1",["Me","Him","Her"],"datedue","urgent"];
  taskStorage[1]=["1001","Take Out Trash","description2",["Me","Him","Her"],"datedue","urgent"];
  taskStorage[2]=["1002","Clean Dog","description3",["Me","Him","Her"],"datedue","urgent"];

  listStorage[0]=["100","chores", [taskStorage[0],taskStorage[1],taskStorage[2]]];

  taskStorage[0]=["1003","Turn in essay","description1",["Me","Him","Her"],"datedue","urgent"];
  taskStorage[1]=["1004","Read Chapter 1","description2",["Me","Him","Her"],"datedue","urgent"];
  taskStorage[2]=["1005","Finish Lab","description3",["Me","Him","Her"],"datedue","urgent"];

  listStorage[1]=["101","schoolwork", [taskStorage[0],taskStorage[1],taskStorage[2]]];
  console.log(taskStorage[0]);
}

function findList(id){
  for(var i=0;i<listStorage.length;i++){
    if(listStorage[i][S_LISTID] == id){
      return i;
    }
  }
  return -1;
}

function findTask(listIndex, taskid){
  for(var i=0;i<listStorage[listIndex][S_TASKLIST].length;i++){
    if(listStorage[listIndex][S_TASKLIST][i][S_TASKID] == taskid){
      return i;
    }
  }
  return -1;
}

$(document).load(function(){

})

$(document).ready(function() {
  //hideUrgencyIcon();
  setupFakeStorage();
})

function logout(){
      document.cookie="TBuserID=; path=/";
}
function visibleForm(name) {
    //do stuff
    /*var x=document.forms["taskForm"]["tname"].value;
    if (x==null || x=="" || x="New Task...") {
    	alert("Enter a task");
    	return false;
    }*/

    if (document.getElementById(name).style.visibility=="visible") {
    	document.getElementById(name).style.visibility="hidden";
    }
    else document.getElementById(name).style.visibility="visible";

    return true;
}
/*
function signup(name) {
    //do stuff

    if (document.getElementById(name).style.visibility=="visible") {
        document.getElementById(name).style.visibility="hidden";
    }
    else document.getElementById(name).style.visibility="visible";

    return true;
}*/


function showContact(name, name_Field, contactName) {
    //do stuff
    /*var x=document.forms["taskForm"]["tname"].value;
    if (x==null || x=="" || x="New Task...") {
        alert("Enter a task");
        return false;
    }*/
    document.getElementById(name_Field).innerHTML = contactName;

    if (document.getElementById(name).style.visibility=="visible") {
        document.getElementById(name).style.visibility="hidden";
    }
    else document.getElementById(name).style.visibility="visible";



    return true;
}
/*function logOut(){
    window.location.href ='/';
}*/

function visibleTaskForm(name) {
    //do stuff
    /*var x=document.forms["taskForm"]["tname"].value;
    if (x==null || x=="" || x="New Task...") {
        alert("Enter a task");
        return false;
    }*/
    if (document.getElementById(name).style.display=="block") {
        document.getElementById(name).style.display="none";
    }
    else document.getElementById(name).style.display="block";

    return true;
}

function inputFocus(i){
    if(i.value==i.defaultValue){ i.value=""; i.style.color="#000"; }
}
function inputBlur(i){
    if(i.value==""){ i.value=i.defaultValue; i.style.color="#888"; }
}


// Used
function toggleEditGroup(name, name_Field, groupName) {
    //do stuff
    /*var x=document.forms["taskForm"]["tname"].value;
    if (x==null || x=="" || x="New Task...") {
        alert("Enter a task");
        return false;
    }*/
    if (getViewType() == 'groups') ga("send", "event", "groupMembersButton1", "click");
    else ga("send", "event", "groupMembersButton2", "click");
    document.getElementById(name_Field).innerHTML = groupName;
/*
    if (document.getElementById(name).style.visibility=="visible") {
        document.getElementById(name).style.visibility="hidden";
    }
    else document.getElementById(name).style.visibility="visible";
 */
    
    /*if( $("#"+name).is(":visible") == true ){
      $("#"+name).hide();
    }
    else{
      $("#"+name).show();
    }*/
 $("#"+name).show();
    return true;
}
/*
function addList(){
    $("#grouplists").append("<div class='panel panel-primary'>
  <div class='panel-body'>
    NEW LIST
  </div>
  Add Task
  <div class='panel-footer {{filters}}''>{{name}}</div>
  {{/each}}
  <a href='#'' onclick="">
  <div id='add-{{name}}'class='panel-footer {{filters}}'style='text-align:right'>Add Task</div>
  </a>
</div>");

}
*/

function addgrouplistsareafunction(div){
  $("#addlisttasksarea"+div).hide();
  $("#addtaskinputform"+div).show();
    $("#addtasktext"+div).hide();
};

$("#profilebutton").click(function(){
  $("#editProfile").show();
});

$("#helpbutton").click(function(){
  $("#helpbox").show();
});

function closeHelp()
{
  $("#helpbox").hide();
}

$("#addGroupButton").click(function(){
  $("#addGroup").show();
});
$("#addgrouplistsarea").click(function(){
  $("#addlisttext").hide();
  $("#addlistinputform").show();
    $("#addgrouplistsarea").hide();
});


$("#addgrouptlistssubmit").click(function(fname){
  $("#addlisttext").show();
  $("#addlistinputform").hide();
  $("#addgrouplistsarea").show();
  if(document.getElementById('addlistinput').value ==null||document.getElementById('addlistinput').value ==''){
    document.getElementById('addlistinput').value = "New List Name";
  }
  /*
     var html ='<div class="panel panel-default">';
        html +=' <div id = "'+document.getElementById('addlistinput').value+'"class="panel-heading">' +document.getElementById('addlistinput').value+ '</div>';
        html +=' <div id="add-Name" class="panel-footer"style="text-align:right">Add Task</div></div>'
        */
        /*
        var html ='<div class="panel panel-default">';
        html +=' <div id = "'+document.getElementById('addlistinput').value+'"class="panel-heading"><strong>' +document.getElementById('addlistinput').value+ '</strong></div>';
        html +=' <div id="add-Name" class="panel-footer"style="text-align:right">Add Task</div></div>'*/
    
    //var curr_url  = window.location.href.toString();
    //var url_parts = curr_url.split("/");
   // var group_id = url_parts[url_parts.length - 1];
    var group_id = getGroupID();
    console.log("Start Get");
    $.get('/addList', {name: document.getElementById('addlistinput').value, groupid: group_id }, addListcallback);
    console.log("Finish Get");
    //var listID=1; // Connect with DB and return the listID




});

function addListcallback(result)
{
  console.log("Start Get Callback");
  console.log('the list id is : ' + result['_id']);
var listID = result['_id']+'';
console.log("ListID: "+listID);
var html='';
html+='<div class="panel panel-default">';
html+='<div class="panel-heading" id="listnavbar">';
html+='<strong>'+document.getElementById('addlistinput').value+'</strong>';
html+='</div>';
html+='<ul class="list-group">';
html+='<div id="list'+listID+'" class="listsoftasks">';
html+='</div></ul>';
html+='<div id="addlisttasksarea'+listID+'" onclick="addgrouplistsareafunction(\''+listID+'\')" style="width:inherit, height:inherit;">';
html+='<div id="addtasktext'+listID+'" class="panel-footer" style="text-align:right">Add Task</div>';
html+='</div>';
html+='<form action="" id="addtaskinputform'+listID+'" class="addtaskinputform" onsubmit="return false;"> <input id="addtaskinput'+listID+'" class="addtaskinput" type="text" name="fname" >';
html+='<input type="submit" value="Submit"   onclick="addlisttaskssubmit(\''+listID+'\');return false;" id="addlisttasksubmit'+1+'">';
html+='</form>';
html+='</div>';

$("#grouplists").append(
html);
document.getElementById('addlistinput').value = "";
location.reload();
}

function a2hex(str) {
  var arr = [];
  for (var i = 0, l = str.length; i < l; i ++) {
    var hex = Number(str.charCodeAt(i)).toString(16);
    arr.push(hex);
  }
  return arr.join('');
}

$.ajaxSetup({
      async: false
      });

var new_TaskID;
function addTaskCallback(result) {
  new_TaskID = result['_id'];
  console.log(new_TaskID);
}

function addlisttaskssubmit(listID){
  $("#addlisttasksarea"+listID).show();
  $("#addtaskinputform"+listID).hide();
    $("#addtasktext"+listID).show();
    $.get("/addTask",{ name: document.getElementById('addtaskinput'+listID).value, listid : listID}, addTaskCallback);
 if(document.getElementById('addtaskinput'+listID).value ==null||document.getElementById('addtaskinput'+listID).value ==''){
    document.getElementById('addtaskinput'+listID).value = "New Task Name";
  }
  /*
     var html ='<listID class="panel-body">';
        html += document.getElementById('addtaskinput'+listID).value;
        html +='</listID>'*/

  // ADD THE TASK NAME INTO DB: document.getElementById('addtaskinput'+listID).value
    //.get
  // RETURN VALUE
  var newTaskID = new_TaskID;// STICK RETURN VALUE HERE
  addTaskToList(listID, newTaskID);
  //location.reload();
/*
  var html =' <li class="list-group-item {{filters}}" onClick="editTaskFunction(101,1001)">'; 
  html += document.getElementById('addtaskinput'+listID).value;
  html +='</li>'

  $("#list"+listID).append(   
    html);*/
    document.getElementById('addtaskinput'+listID).value = "";
    location.reload();


}


//append to list{{id}}
//<div class="panel-footer {{filters}}">{{name}}</div>



//hide the form after click save/cancel

function hideForm(the_id)
{
   //document.getElementById(the_id).style.visibility="hidden";
   $('#'+the_id).hide();
}

/*function addmembersubmit(){
   var html =' <li class="list-group-item">'+$('#addmemberinput').val()+'</li>';


  $(".membercontainer").append(
    html);
    $('#addmemberinput').val("asdf");
    return false;
}*/

$('#addmembersubmit').click(function(){
    var str = $('#addmemberinput').val()
    if(str==null||str==""){
        return false;
    }
   //addUserToGroup
   $.get("/addUserToGroup",{ email: str, groupid:getGroupID()},function(result){
    if(result != null){
        if(result =="UserDoesNotExist"){
          $('.errormsgmain').html("Email does not exist");
          $('.errormsgmain').css("display","block");
        }
        else if(result=="AlreadyInGroup"){
          $('.errormsgmain').html("User already in group");
          $('.errormsgmain').css("display","block");
          return false;
        }
        else{
          console.log("Adding this user:");
          console.log(result);
          var html =' <li class="list-group-item">'+result[0]['name']+'</li>';
          $(".membercontainer").append(html);
          $('#addmemberinput').val("");
          $('.membercontainer').scrollTop($('.membercontainer')[0].scrollHeight);
           // $("#addMember").show();
          return false; //Why
        }
      }
      else{ //Why
      }
   });

});

function addmemberareafunction()
{
  //$("#addMember").hide();
  $("#addmemberinputform").show();
  //$("#addmemberinputform").show();
  
}

//groupmemberslist


function editGroupName(groupName)
{
  $("#groupnamefield").hide();
  $("#editgroupname").show();
  $("#editgroupname").html(groupName);
}

//add a new filter
function newFilter()
{
  $("#newFilter").show();
}

function saveFilter()
{
  //make sure user has entered a name
  if($("#filterName").val().length == 0)
  {
    $("#filterName").css('border-color', 'red');
    $("#filterName").attr('placeholder', 'Filter needs a name');
  }
  else
  { 
    $("#newFilter").hide();

    var filterName_ = $("#filterName").val();
    var e = document.getElementById("priority_");
    var priority_ = e.selectedIndex;
    var xDays_ = $("#xDays").val();
    var dueDate_ = $("#dueDate").val();
    checkCookie();
    var contactID_ = getUserID();

     //save to the db
    $.get('/addFilter', {filterName:filterName_, priority:priority_, xDays:xDays_, 
          dueDate:dueDate_, contactID:contactID_ });

    //reset new filter form values
    $("#filterName").css('border-color', 'black');
    $("#filterName").attr('placeholder', 'Name');
    $("#filterKeywords").attr('placeholder', 'Keywords');
    $('#filterAssignedTo').attr('placeholder', 'Assigned To');
    $('#dueDate').attr('placeholder','Due Date dd/mm/yy');
    
    //$("#filterKeywords").val('');
   // $("#filterAssignedTo").val('');
    $("#filterName").val('');
    $("#dueDate").val('');

    location.reload();
   

}



  //append to filter list????
}
function cancelFilter()
{
  $("#newFilter").hide();
  $("#filterName").css('border-color', 'black');
  $("#filterName").attr('placeholder', 'Name');
  $("#filterKeywords").attr('placeholder', 'Keywords');
  $('#filterAssignedTo').attr('placeholder', 'Assigned To');
  $('#dp').attr('placeholder','Due Date dd/mm/yy');
  
  $("#filterKeywords").val('');
  $("#filterAssignedTo").val('');
  $("#filterName").val('');
  $("#dp").val('');


}

//delete a filter
function deleteFilter(name_, contactID_){
  console.log("about to delete filter");  
  var delFilter = confirm('Are you sure you want to delete the filter '+name_);
  
  if(delFilter){
    $.get('/deleteFilter', {name:name_, contactID:contactID_});
    location.reload();
  }

}


var updatingTaskID;
function editTaskFunction(listid, taskid)
{
  updatingTaskID = taskid;
  /* Local Storage Method

  var listIndex = findList(listid);
  var taskIndex = findTask(listIndex,taskid);

  console.log(listIndex);
  console.log(taskIndex);
  console.log(listStorage[listIndex][S_TASKLIST][taskIndex][S_TASKNAME]);

  $("#editTask").show();
  $("#taskTitle").val(listStorage[listIndex][S_TASKLIST][taskIndex][S_TASKNAME]);*/

  //$("#taskDescription").val(description);
  //$("#taskTitle").val(task);
  //$("#taskTitle").val(task);

  console.log("User clicked on color button");
  //$.get("/listtask",{ field1: listid, field2: taskid },newFunction2);

  $("#editTask").show();
  $("#taskTitle").val();
  $.get("/getTaskInfo",{ taskid: taskid }, getTaskInfoCallback);


}

function getTaskInfoCallback(result){
  $("#editTask").show();
  $("#taskTitle").val(result['name']);
  $("#taskDescription").val(result['description']);
  //$("#taskAssignedTo").val(result['']);
  var currName;
  if (result['status']) currName = "true";
  else currName = "false";
  //$("#taskStatus").val($('select option[value=currName]').attr("selected",true););
  $("#taskStatus").val(currName);
  var currPriority;
  if (result['priority'] == 0) currPriority = "0";
  else if (result['priority'] == 1) currPriority = "1";
  else if (result['priority'] == 2) currPriority = "2";
  else currPriority = "3";
  $("#taskPriority").val(currPriority);
  if (result['duedate'] != null) {
    var currDueDate = result['duedate'][5]+result['duedate'][6]+"/"+result['duedate'][8]+result['duedate'][9]+"/"+result['duedate'][0]+result['duedate'][1]+result['duedate'][2]+result['duedate'][3];
  }
  $("#taskDueDate").val(currDueDate);
  console.log(result);
}
function clearTaskFields(){
   $("#taskTitle").val("");
}

function saveEditTask()
{
  var e = document.getElementById("taskStatus");
  var status = e.options[e.selectedIndex].value;
  if (status == "false") status = false;
  else status = true;
  var d = document.getElementById("taskPriority");
  var priority = d.options[d.selectedIndex].value;
  if (priority == "0") priority = 0;
  else if (priority == "1") priority = 1;
  else if (priority == "2") priority = 2;
  else priority = 3;
  $.ajaxSetup({
      async: false
      });
  $.get("/updateTaskInfo", { taskid : updatingTaskID, tasktitle : $("#taskTitle").val(), taskdescription : $("#taskDescription").val(), taskstatus : status, taskpriority :  priority, taskduedate : new Date($("#taskDueDate").val()) }, saveEditTaskCallback);
  $("#editTask").hide();
  clearTaskFields();
  updatingTaskID = null;
}

function saveEditTaskCallback(result) {
}

function deleteEditTask()
{
  var deltrue = confirm('Are you sure you want to delete the task: ' + $("#taskTitle").val());

  if(deltrue)
  {
    $("#task"+updatingTaskID).hide();
    $.get("/deleteTask", { taskid : updatingTaskID }, deleteEditTaskCallback);
  }
  $("#editTask").hide();
  clearTaskFields();
  updatingTaskID = null;
} 

function deleteEditTaskCallback(result) {
}

function cancelEditTask()
{
  $("#editTask").hide();
  clearTaskFields();

}

function saveEditProfile()
{
  $.get("/updateContact", { namefield : $("#username").val(), password : $("#userpassword").val(), email : $("#useremail").val() }, function() {});
  $("#dropdownContactName").html($("#username").val());
  $("#editProfile").hide();
}
function cancelEditProfile()
{
  $("#editProfile").hide();

}
function AddGroup()
{
    checkCookie();
  $.get("/addGroup", {name: document.getElementById('groupname').value, userID: getUserID()}, addGroupCallBack);

  //<li><a href="/groups/{{id}}">{{name}}</a>
  //addgrouparea
}
function addGroupCallBack(result)
{
  $("#addGroup").hide();
  var html ='<li><a href="/groupsAlt/'+result['groupID']+'">'+document.getElementById('groupname').value+'</a>';
  $("#addgrouparea").append(
    html);
  document.getElementById('groupname').value= "";
  window.location.href='/groupsAlt/'+result['groupID'];
}

function CancelAddGroup()
{
  $("#addGroup").hide();

}
function hideUrgencyIcon()
{
  var id;
  for (id=1000; id < 1006; id++) {
    var filter = $('#task'+id).attr("class");
    if(filter.indexOf('ready') > -1) {$('#task'+id+' .glyphicon-fire').show();}
  }
}
/*
var $datepicker = $("#dp");
$(function($) {
$datepicker.datepicker({
        showButtonPanel: true,
        dateFormat: 'm-d-yy'
    });
});
//$datepicker.datepicker('setDate', new Date());
*/

//hide header when editing group name
$("#editgroup").mousedown(function()
{
  if($("#editgroupname").is(":visible"))
    {
      $("#editgroupname").hide();
    }
  if($("#groupnamefield").is(":visible") == false)
      $("#groupnamefield").show();

  if($("#editgroupname").val().length > 0)
    $("#groupnamefield").html($("#editgroupname").val());
});
//mouseover will create highlight
$('li').mouseover(function()
  {
          if ($('li ul li:hover').length) 
          {
              $('li ul li:hover').css('background','#ffa500'); //#ffa500 --> orange
          }
          else
          {
               $('li:hover').css('background','#ffa500'); 
          }
  });
$('li').mouseout(function()
  {
          $(this).css('background', 'white');
  });



function clearTasksFromLists(){
  $(".listsoftasks").empty();
}

function addTaskToList(_listID,_taskID){

   var html =' <li class="list-group-item" id="task'
        html += _taskID
        html += '" onClick="editTaskFunction(\''+_listID+'\',\''+_taskID+'\')">';  //PUT THE LIST & ID of the TASK!
        html += document.getElementById('addtaskinput'+_listID).value;
        html +='</li>'
  
  $("#list"+_listID).append(
    html);
}

function addTaskToList2(_listID,_taskID, _name){
   var html =' <li class="list-group-item" id="task'
        html += _taskID
        html += '" onClick="editTaskFunction(\''+_listID+'\',\''+_taskID+'\')">';  //PUT THE LIST & ID of the TASK!
        html += _name;// document.getElementById('addtaskinput'+_listID).value;
        html +='</li>'
  
  $("#list"+_listID).append(
    html);
}

/*function filterTasks(name){
  SORTTYPE = name;
    $.get("/applyFilter",{filter:name},fillTasksCallback);


}*/
//hides the tasks based on filterName
 var filterNames = new Array('.ready', '.needsoon', '.urgent');
 function filterTasks(selected_filter)
 {
   for(var filterName in filterNames)
   {
     if(filterNames[filterName]!=selected_filter)
     {
       $(filterNames[filterName]).hide();
     }
    
   }
  if($(selected_filter).is(":visible") == false)
       $(selected_filter).show();
 }


//real filtertasks
function filterthetasks(filtername, xdays, priority, dueDate)
{
 
         var groupid = getGroupID();
          function afterFilter(result)
          {
            clearTasksFromLists();
            for(var i = 0; i < result.length; i++){
              addTaskToList2(result[i]['listID'], result[i]['_id'], result[i]['name']);
            }
          }
          $.ajaxSetup({
            async: false
            });
          $.get('/filterTasks', {groupID:getGroupID(), priority_:priority, dueDate_:dueDate, xdays_:xdays}, afterFilter);

}

function sortTasks(name){
  FILTERTYPE = name;
    //$.get("/applySort",{sort:name},fillTasksCallback);
    if(FILTERTYPE=='None'){
      location.reload();
      return;
    }
    var groupid_ = getGroupID();
    function afterSort(result)
    {
        clearTasksFromLists();
        for(var i = 0; i < result.length; i++){
            addTaskToList2(result[i]['listID'], result[i]['_id'], result[i]['name']);
        }

    }
     $.ajaxSetup({
            async: false
            });
    if(FILTERTYPE=='Alphabetical')
      $.get("/sortAlpha", {groupid:groupid_}, afterSort);
    else
      $.get("/sortDateDesc", {groupid:groupid_}, afterSort);



}

var returnedLists;
function fillTasksCallback(result){
  clearTasksFromLists();
  returnedLists = result;
      for(var i = 0; i<returnedLists.length;i++){
      console.log(returnedLists);
      for(var j = 0; j<returnedLists[i]['tasks'].length;j++){
        addTaskToList2(returnedLists[i]['id'], returnedLists[i]['tasks'][j]['id'], returnedLists[i]['tasks'][j]['name']); 
    }
  }
}

//show verification for delete list
function showDeleteList(listid, listname){
  var deltrue = confirm('Are you sure you want to delete the list: ' + listname);

  if(deltrue)
  {
    //console.log("TRUE FOR DELETE LIST");
    $.get("/delList",{id:listid});
    location.reload();
  }

}

//edit group name
function editGroupTitle()
{
  var gID = getGroupID();
  var newTitle = $('textarea#edit_title').val();//document.getElementById('edit_title').value;
  $.get('/editGroupName', {groupid: getGroupID(), name: $('textarea#edit_title').val()});

  //function titleCB()
  location.reload();

  $("#editgrouptitle").hide();



}

function showEditGroupName(groupName)
{
  $("#editgrouptitle").show();
  $("#edit_title").html(groupName);
}
function hideEditGroupName()
{
  $("#editgrouptitle").hide();
}

//leave group
function leaveGroup(){
  checkCookie();
  //check if the user is in at least one group
  $.get('/findGroups', {contactid:getUserID}, numGroups)
  var enoughGroups = false;
  function numGroups(result){
    if(result.length > 1){
      enoughGroups = true;

    }
      //console.log("amount of groups");
      //console.log(result.length);

      if(enoughGroups)
      {
        checkCookie();
        $.get('/leaveGroup', {groupid:getGroupID(), contactid:getUserID()});
        location.reload();
      }
      else{
        window.alert("Sorry you can't be in less than 1 group");
      }
  }
  
  //location.reload();
}

function editListName()
{

  console.log("inside editlistname");

  var listname =  $("textarea#edit_listname").val(); 
  var listid = $("textarea#thelistid").val();
  console.log(listname);
  console.log(listid);
  $.get('/editListName', {id:listid, name:listname});
  location.reload();
  
}
function hideEditList(){
  $("#editlistname").hide();

}
function showEditList(listName, theid)
{
  $("#editlistname").show();
  $("#edit_listname").html(listName);
  $("#thelistid").html(theid);
  console.log(theid);

}
function deleteList()
{
  var listid = $("textarea#thelistid").val();
  console.log('THE LIST ID');
  console.log(listid);

   var deltrue = confirm('Are you sure you want to delete the list? ' );

  if(deltrue)
  {
    console.log("TRUE FOR DELETE LIST");
    $.get("/delList",{id:listid});
    location.reload();
  }

}

//filter tasks

var nowTemp = new Date();
var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
 
var checkin = $('#dpd1').datepicker({
  onRender: function(date) {
    return date.valueOf() < now.valueOf() ? 'disabled' : '';
  }
}).on('changeDate', function(ev) {
  if (ev.date.valueOf() > checkout.date.valueOf()) {
    var newDate = new Date(ev.date)
    newDate.setDate(newDate.getDate() + 1);
    checkout.setValue(newDate);
  }

  checkin.hide();
  $('#dpd2')[0].focus();
}).data('datepicker');
var checkout = $('#dpd2').datepicker({
  onRender: function(date) {
    return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
  }
}).on('changeDate', function(ev) {
  checkout.hide();
}).data('datepicker');

$("#dueDate").click(function(){
  
});
$('.datepicker').datepicker();

$("#myGroupsButton").click(function(){
  if (getViewType() == 'groups') ga("send", "event", "myGroupsButton1", "click");
  else ga("send", "event", "myGroupsButton2", "click");
});


$("#settingsButton").click(function(){
  if (getViewType() == 'groups') ga("send", "event", "settingsButton1", "click");
  else ga("send", "event", "settingsButton2", "click");
});

$("#sortButton").click(function(){
  if (getViewType() == 'groups') ga("send", "event", "sortButton1", "click");
  else ga("send", "event", "sortButton2", "click");
});

$("#filterButton").click(function(){
  if (getViewType() == 'groups') ga("send", "event", "filterButton1", "click");
  else ga("send", "event", "filterButton2", "click");
});

//google analytics code

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
