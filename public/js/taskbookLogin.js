var homepage;
var resultDB = false;

$(document).load(function(){

})

$(document).ready(function() {
  //hideUrgencyIcon();
  if(checkCookie()){

  }
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





//append to list{{id}}
//<div class="panel-footer {{filters}}">{{name}}</div>
function login(){
      $("#signupbutton").hide();
    $("#loginbutton").show();
    $("#inputname").hide();
    $("#confirmpassword").hide();
    $("#newuserlink").show();
    $("#olduserlink").hide();

    $('#inputemail').css("background-color", "white");
    $('#inputpassword').css("background-color", "white");
    $('.errormsg').css("display","none");

    $("#signuparea").css("padding-top","10px");
}

function signup(){
    $("#signupbutton").show();
    $("#loginbutton").hide();
    $("#inputname").show();
    $("#confirmpassword").show();

    $("#newuserlink").hide();
    $("#olduserlink").show();
    $("#slick-login").css("height","200px");
    $('#inputemail').css("background-color", "white");
    $('#inputpassword').css("background-color", "white");
    $('.errormsg').css("display","none");

    $("#signuparea").css("padding-top","10px");
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
    window.location.href='/groups/'+homepage;
    }
    //validateEmail();
}
function LoginForm(){
    
    if(checkLogin()){
        window.location.href='/groups/'+homepage;
    }
}

function checkLogin(){
   //$.get("/kitty");
   //function callback(){}
  console.log("check login");

   


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
    $.ajaxSetup({
      async: false
      });
    if(y==null||y==""){
        $('#inputemail').css("background-color", "white");
        $('#inputpassword').css("background-color", "yellow");
        $('.errormsg').html("Please Input Password!");
        $('.errormsg').css("display","block");
        return false;
    }

    //Check Database for email/password
  var userID;
  function loginresponse(result){
    console.log('the result : please  ' + result['email'] + ' pw:' + result['password']);
    console.log("Password:"+result['password']);
    console.log("Input:"+y);
    if((result['password']==y)){
    resultDB = true;
    userID = result['_id'];
    homepage = result['defaultgroup'];
    console.log("Set To True");



    
    }
  }
  $.get("/contactmodel", {email:x, password:y},loginresponse);

  if(!resultDB){
        console.log("Bad Password");
        $('#inputpassword').css("background-color", "yellow");
        $('#inputemail').css("background-color", "yellow");
        $('.errormsg').html("Incorrect Email/Password!");
        $('.errormsg').css("display","block");
        return false;
    }

    document.cookie = "TBuserID=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie="TBuserID="+userID;
    return true;
}


    var contactexists = true;
function validateEmail(){
    $('#inputemail').css("background-color", "white");
    $('#inputpassword').css("background-color", "white");
    $('#confirmpassword').css("background-color", "white");
    $('.errormsg').css("display","none");
    var x=document.forms["slick-login"]["inputemail"].value;
    var z=document.forms["slick-login"]["inputpassword"].value;
    var y=document.forms["slick-login"]["confirmpassword"].value;
    var w=document.forms["slick-login"]["inputname"].value;
    var atpos=x.indexOf("@");
    var dotpos=x.lastIndexOf(".");

    if(w==""||w==null){
      $('#inputname').css("background-color", "yellow");
      $('.errormsg').html("Please input name");
      $('.errormsg').css("display","block");
      return false;
    }
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
      {
        $('#inputemail').css("background-color", "yellow");
        $('.errormsg').html("Not a Valid Email!");
        $('.errormsg').css("display","block");
      return false;
      }
    else{// Check if email is taken
       //$.get("/contactmodel", {email:x, password:y},loginresponse);
    }
        $('#inputname').css("background-color", "white");
        $('#inputemail').css("background-color", "white");
    if(z.length<4){
        $('#inputpassword').css("background-color", "yellow");
        $('.errormsg').html("Password needs to be greater than 4 characters!");
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
          $.ajaxSetup({
      async: false
      });

    //$.get("/contactmodel", {email:x},checkifemailexists);

    
    //else{
    $.get("/AddNewUser", {email:x, password:y, namefield:w},addnewusercallback);
   if(contactexists){
                $('#inputemail').css("background-color", "yellow");
        $('.errormsg').html("Email already exists!");
        $('.errormsg').css("display","block");
      return false;
    }
    else{

      return true;
    }
    //sleep(2000);
  }

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

var hello;
function addnewusercallback(result){
    console.log("Added new user:")
    console.log(result);
    hello =console.log("addnewusercallback: " + result);
    homepage = result['groupID'];
    userID = result['contactID'];

  if(result !="UserExists"&& userID !="undefined"){

    document.cookie = "TBuserId=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie="TBuserID="+userID;
    //window.location.href='/groups/'+homepage;
    contactexists = false;
  }
  else{

    contactexists = true;
    //return false;
  }

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
