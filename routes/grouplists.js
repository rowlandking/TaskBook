var lists = require('../AllLists.json');

exports.returnLists = function(req, res) {
	// get a random palette from the top ones
	var retLists = lists[req.query.field1];//['tasks'][req.query.field2];//[lists[0]];
	//res.send('Your random palette is called: ' + randomPalette['title']);

	
	var listIndex=-1;
	var taskIndex=-1;
	console.log("listsize: "+lists.length);
	for(var i = 0; i<lists.length;i++){

		if(parseInt(lists[i]['id'])==parseInt(req.query.field1)){
			listIndex = i;
			break;
		}
	}
	console.log("listIndex " + listIndex)
	for(var i = 0; i<lists[listIndex]['tasks'].length;i++){
		if(parseInt(lists[listIndex]['tasks'][i]['id'])==parseInt(req.query.field2)){
			taskIndex = i;
			break;
		}
	}
	//console.log();

	res.json(lists[listIndex]['tasks'][taskIndex]);
}