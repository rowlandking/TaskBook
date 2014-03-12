
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

//var groups = require('./routes/groups');
var group = require('./routes/group'); 
var grouplists = require('./routes/grouplists');
var group_list = require('./routes/listmodel');
var grouptasks = require('./routes/taskmodel');
var groupgroups = require('./routes/groupmodel');
var mongoose = require('mongoose');

var index = require('./routes/index');
/*
var project = require('./routes/project');
var tasks = require('./routes/tasks');
var lists = require('./routes/lists');
var contacts = require('./routes/contacts');*/
var local_database_name = 'TaskBook';
var local_database_uri  = 'mongodb://localhost/' + local_database_name;
var MONGOHQ_URL="mongodb://karen:1234@troup.mongohq.com:10034/taskbook";
var database_uri = process.env.MONGOHQ_URL || local_database_uri;
//mongo
mongoose.connect(MONGOHQ_URL);

console.log(mongoose.connection.readyState);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'dude connection error:')); 
db.once('open', function callback () {
  // yay!
  console.log('run run');
});

var kitty = require('./routes/kitty');
var contact = require('./routes/contactmodel');
var list = require('./routes/listmodel');
var filter = require('./routes/filtermodel');




//var silence = new Kitten({ name: 'Silence' })
//console.log(silence.name); // 'Silence'



// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/groups/:id',group.viewGroup);
app.get('/groupsALT/:id',group.viewGroup);
app.get('/groups/',group.defaultGroup);
app.get('/groupsALT/',group.defaultGroupAlt);
//app.get('/tasks', tasks.view);
//app.get('/lists', lists.view);
//app.get('/groups', groups.view);
//app.get('/contacts', contacts.view);

app.get('/kitty', kitty.speak);
app.get('/contactmodel', contact.contactExists);
app.get('/updateContact', contact.updateContactInfo);
app.get('/addTask', grouptasks.addTask);
app.get('/deleteTask', grouptasks.deleteTask);
app.get('/listTask',grouplists.returnTask);
app.get('/getTaskInfo', grouptasks.getTaskInfo);
app.get('/updateTaskInfo', grouptasks.updateTaskInfo);
app.get('/sortAlpha', grouptasks.sortAlphabetical);
app.get('/sortDateDesc', grouptasks.sortDateDescending);
app.get('/addList',group_list.addList);
app.get('/delList', group_list.deleteList)
app.get('/addGroup', groupgroups.addGroup);
app.get('/editGroupName', groupgroups.editGroupName);
app.get('/leaveGroup', groupgroups.leaveGroup);
//app.get('/contactmodel', contact.taskExists);
app.get('/applyFilter',grouplists.applyFilter);
app.get('/applySort',grouplists.applySort);
app.get('/listmodel/:groupID', list.findLists);
app.get('/addNewUser', contact.AddContactToDB);
app.get('/addUserToGroup', contact.AddContactToGroup);
app.get('/addFilter', filter.addFilter);
app.get('/filterTasks', filter.filterTasks);
app.get('/deleteFilter', filter.deleteFilter);

//app.get('/filterTasks', filter.filterTasks);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){ 
  console.log('Express server listening on port ' + app.get('port'));
});

