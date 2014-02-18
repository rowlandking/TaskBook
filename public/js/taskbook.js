
var taskStorage = new Array(); 
var listStorage = new Array();
var S_TASKNAME = 1;
var S_LISTNAME = 1;
var S_TASKID = 0;
var S_LISTID = 0;
var S_DESCRIPTION = 2;
var S_ASSIGNEDTO = 3;
var S_TASKLIST = 2;

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

$(document).ready(function() {
  //hideUrgencyIcon();
  setupFakeStorage();
})

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
function logOut(){
    window.location.href ='/';
}

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
    document.getElementById(name_Field).innerHTML = groupName;

    if (document.getElementById(name).style.visibility=="visible") {
        document.getElementById(name).style.visibility="hidden";
    }
    else document.getElementById(name).style.visibility="visible";
 
    
    /*if( $("#"+name).is(":visible") == true ){
      $("#"+name).hide();
    }
    else{
      $("#"+name).show();
    }*/

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
        var html ='<div class="panel panel-default">';
        html +=' <div id = "'+document.getElementById('addlistinput').value+'"class="panel-heading">' +document.getElementById('addlistinput').value+ '</div>';
        html +=' <div id="add-Name" class="panel-footer"style="text-align:right">Add Task</div></div>'
  $("#grouplists").append(
    html);
    document.getElementById('addlistinput').value = "";

});


function addlisttaskssubmit(div){
  $("#addlisttasksarea"+div).show();
  $("#addtaskinputform"+div).hide();
    $("#addtasktext"+div).show();
 if(document.getElementById('addtaskinput'+div).value ==null||document.getElementById('addtaskinput'+div).value ==''){
    document.getElementById('addtaskinput'+div).value = "New Task Name";
  }
  /*
     var html ='<div class="panel-body">';
        html += document.getElementById('addtaskinput'+div).value;
        html +='</div>'*/
         var html =' <li class="list-group-item {{filters}}">';
        html += document.getElementById('addtaskinput'+div).value;
        html +='</li>'
  $("#list"+div).append(
    html);
    document.getElementById('addtaskinput'+div).value = "";

}

//append to list{{id}}
//<div class="panel-footer {{filters}}">{{name}}</div>


function signup(){
    $("#signupbutton").show();
    $("#loginbutton").hide();
    $("#confirmpassword").show();
    $('#inputemail').css("background-color", "white");
    $('#inputpassword').css("background-color", "white");
    $('.errormsg').css("display","none");


    /*var record = new kittySchema(

        kittySchema.speak();          
    );*/
    
   

   /* record.save(function(err))
    {
        if(err){
          console.log(err);
          res.status(500).json({status: 'failure'});
        }else{
          res.json({status: 'success'});
        }
    });*/
}

function SignupForm(){
    if(validateEmail()){
    window.location.href='/groups/Book%20Club';
    }
}
function LoginForm(){
    if(checkLogin()){
        window.location.href='/groups/Book%20Club';
    }
}

function checkLogin(){
   //$.get("/kitty", callback);
   function callback(){}
    var x=document.forms["slick-login"]["inputemail"].value;
    var y=document.forms["slick-login"]["inputpassword"].value;
    //If either are null, return error
    if(x==null||x==""){
        $('#inputemail').css("background-color", "yellow");
        $('#inputpassword').css("background-color", "white");
        $('.errormsg').html("Please Input Email!");
        $('.errormsg').css("display","block");
        return false;
    }

    else {
        var atpos=x.indexOf("@");
        var dotpos=x.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
          {
          $('#inputemail').css("background-color", "yellow");
        $('.errormsg').html("Email Not Valid!");
        $('.errormsg').css("display","block");
          return false;
          }
    }
    
    if(y==null||y==""){
        $('#inputemail').css("background-color", "white");
        $('#inputpassword').css("background-color", "yellow");
        $('.errormsg').html("Please Input Password!");
        $('.errormsg').css("display","block");
        return false;
    }

    //Check Database for email/password
    if(x!=y){
        $('#inputpassword').css("background-color", "yellow");
        $('#inputemail').css("background-color", "yellow");
        $('.errormsg').html("Incorrect Email/Password!");
        $('.errormsg').css("display","block");
        return false;
    }
    return true;
}

function validateEmail(){
    $('#inputemail').css("background-color", "white");
    $('#inputpassword').css("background-color", "white");
    $('#confirmpassword').css("background-color", "white");
    $('.errormsg').css("display","none");
    var x=document.forms["slick-login"]["inputemail"].value;
    var z=document.forms["slick-login"]["inputpassword"].value;
    var y=document.forms["slick-login"]["confirmpassword"].value;
    var atpos=x.indexOf("@");
    var dotpos=x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
      {
        $('#inputemail').css("background-color", "yellow");
        $('.errormsg').html("Not a Valid Email!");
        $('.errormsg').css("display","block");
      return false;
      }
    else{// Check if email is taken

    }
        $('#inputemail').css("background-color", "white");
    if(z.length<4){
        $('#inputpassword').css("background-color", "yellow");
        $('.errormsg').html("Password Is Too Short!");
        $('.errormsg').css("display","block");
        return false;
    }

      if(z!=y){
        $('#inputpassword').css("background-color", "yellow");
        $('#confirmpassword').css("background-color", "yellow");
        $('.errormsg').html("Passwords Don't Match!");
        $('.errormsg').css("display","block");
        //alert("Passwords don't match.");

        return false;
      }
      return true;
}

function validatePassword(){

}
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

//hide the form after click save/cancel

function hideForm(the_id)
{
   document.getElementById(the_id).style.visibility="hidden";
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
   var html =' <li class="list-group-item">'+str+'</li>';


  $(".membercontainer").append(
    html);
    $('#addmemberinput').val("");
$('.membercontainer').scrollTop($('.membercontainer')[0].scrollHeight);
    return false;
});

function addmemberareafunction()
{
  $("#addMember").hide();
  $("#addmemberinputform").show();
}

//groupmemberslist


function editGroupName(groupName)
{
  $("#groupnamefield").hide();
  $("#editgroupname").show();
  $("#editgroupname").html(groupName);
}

function newFilter()
{
  $("#newFilter").show();
}

function saveFilter()
{
  if($("#filterName").val().length == 0)
  {
    $("#filterName").css('border-color', 'red');
    $("#filterName").attr('placeholder', 'Filter needs a name');
  }
  else
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


function editTaskFunction(listid, taskid)
{
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
  $.get("/grouplists",{ field1: listid, field2: taskid },newFunction2);

  $("#editTask").show();
  $("#taskTitle").val();

}

function newFunction2(result){
  $("#editTask").show();
  $("#taskTitle").val(result['name']);
  console.log(result);
}
function clearTaskFields(){
   $("#taskTitle").val("");
}

function saveEditTask()
{
  $("#editTask").hide();
  //Put onto Server
  clearTaskFields();
}
function cancelEditTask()
{
  $("#editTask").hide();
  clearTaskFields();

}

function saveEditProfile()
{
  $("#editProfile").hide();

}
function cancelEditProfile()
{
  $("#editProfile").hide();

}
function hideUrgencyIcon()
{
  var id;
  for (id=2; id < 10; id++) {
    var filter = $('#task'+id).attr("class");
    if(filter.indexOf('needsoon') > -1) {$('#task'+id+' .glyphicon-fire').show();}
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