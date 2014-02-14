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

$("#non").click(function(){
  $(".alphasort").hide();
  $(".nonsort").show();
});

$("#alpha").click(function(){
  $(".nonsort").hide();
  $(".alphasort").show();
});

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
    else if(x!=y){
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

function editTaskFunction(task)
{
  $("#editTask").show();
  $("#taskDescription").val(task);
}

function saveEditTask()
{
  $("#editTask").hide();

}
function cancelEditTask()
{
  $("#editTask").hide();

}

function saveEditProfile()
{
  $("#editProfile").hide();

}
function cancelEditProfile()
{
  $("#editProfile").hide();

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