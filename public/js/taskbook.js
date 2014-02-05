function taskValidate() {
    //do stuff
    var x=document.forms["taskForm"]["tname"].value;
    if (x==null || x=="") {
    	alert("Enter a task");
    	return false;
    }

    return true;    
}