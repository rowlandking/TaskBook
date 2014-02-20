
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
    document.cookie = "TBuserid=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie="TBuserID=12345";
    if(checkLogin()){
        window.location.href='/groups/Book%20Club';
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
    
    if(y==null||y==""){
        $('#inputemail').css("background-color", "white");
        $('#inputpassword').css("background-color", "yellow");
        $('.errormsg').html("Please Input Password!");
        $('.errormsg').css("display","block");
        return false;
    }

    //Check Database for email/password
    var resultDB = false;
  function loginresponse(result){
    console.log('the result : please  ' + result['email'] + 'pw:' + result['password']);
    resultDB = Boolean(result['password']);
   }
  $.get("/contactmodel", {email:x, password:y},loginresponse);
    if(!resultDB){
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
