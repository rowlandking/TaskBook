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