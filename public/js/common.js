var userID = "";

function getCookie(cname)
{
var name = cname + "=";
var ca = document.cookie.split(';');
for(var i=0; i<ca.length; i++) 
  {
  var c = ca[i].trim();
  if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
return "";
}

function checkCookie()
{
var username=getCookie("TBuserID");
if (username!="")
  {
  //alert("Welcome again " + username);
  console.log("Welcome Again" + username);
  userID = username;
  return true;
  }
else 
  {
  return false;
  }
}

function getUserID(){
  return userID
}

function getGroupID(){
 var curr_url  = window.location.href.toString();
    var url_parts = curr_url.split("/");
    var group_id = url_parts[url_parts.length - 1];
    return group_id;

}