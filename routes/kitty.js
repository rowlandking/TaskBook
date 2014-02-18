var mongoose = require('mongoose');

var kittySchema = mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function () {
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name"
  console.log(greeting);
};

var Kitten = mongoose.model('Kitten', kittySchema);

var silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'

//var Kitten = mongoose.model('Kitten', kittySchema);


// NOTE: methods must be added to the schema before compiling it with mongoose.model()
/*kittySchema.methods.speak = function () {
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name"
  console.log(greeting);
};*/