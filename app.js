
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var groups = require('./routes/groups');
var group = require('./routes/group'); //Not needed
var grouplists = require('./routes/grouplists');

var index = require('./routes/index');
var project = require('./routes/project');
var tasks = require('./routes/tasks');
var lists = require('./routes/lists');
var contacts = require('./routes/contacts');

var MONGOHQ_URL="mongodb://karen:1234@troup.mongohq.com:10034/taskbook";
//mongo
var mongoose = require('mongoose');
//mongoose.connect(process.env.MONGOHQ_URL);

console.log(mongoose.connection.readyState);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:')); 
db.once('open', function callback () {
  // yay!
});

var kitty = require('./routes/kitty');
var contact = require('./routes/contactmodel');




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
app.get('/groups/:id', group.viewGroup);
app.get('/tasks', tasks.view);
app.get('/lists', lists.view);
app.get('/groups', groups.view);
app.get('/contacts', contacts.view);

app.get('/kitty', kitty.speak);
app.get('/contactmodel', contact.contactExists);
app.get('/listtask',grouplists.returnTask);
app.get('/grouplists',grouplists.returnLists);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
