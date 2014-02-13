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
  $("#editprofile").show();
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
}

function SignupForm(){
    if(validateEmail()){
    window.location.href='/groups/Book%20Club';
    }
}
function LoginForm(){
        window.location.href='/groups/Book%20Club';
}

function validateEmail(){
    var x=document.forms["slick-login"]["inputemail"].value;
var atpos=x.indexOf("@");
var dotpos=x.lastIndexOf(".");
if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
  {
  alert("Not a valid e-mail address");
  return false;
  }
  return validatePassword();
}

function validatePassword(){
      var x=document.forms["slick-login"]["inputpassword"].value;
      var y=document.forms["slick-login"]["confirmpassword"].value;
      if(x!=y){
        alert("Passwords don't match.");
        return false;
      }
      return true;
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


//groupmemberslist


$('li').mouseover(function()
  {
          if ($('li ul li:hover').length) 
          {
              $('li ul li:hover').css('background','red'); 
          }
          else
          {
               $('li:hover').css('background','red'); 
          }
  });
$('li').mouseout(function()
  {
          $(this).css('background', 'transparent');
  });