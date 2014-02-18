var mongoose = require('mongoose');

var kittySchema = mongoose.Schema({
    name: String,
    location: String,
    num_completed: String
});

kittySchema.methods.speak = function () {
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name"
  console.log(greeting);
};


var Kitten = mongoose.model('Kitten', kittySchema);
var silence = new Kitten({ name: 'Silence' });

exports.speak = function()
{
	console.log("in exports");
	var bob = "5";
	var name_ = "bob";
	var location_ ="couch";

	var newKitten = new Kitten({name: name_, location: location_, num_completed:bob});
	newKitten.save(function (err, newKitten) {
  if (err) // TODO handle the error
  	newKitten.speak();
});
}
console.log(silence.name); // 'Silence'

//var Kitten = mongoose.model('Kitten', kittySchema);


// NOTE: methods must be added to the schema before compiling it with mongoose.model()
/*kittySchema.methods.speak = function () {
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name"
  console.log(greeting);
};*/