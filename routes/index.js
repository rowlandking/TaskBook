var models = require('../models');
/*
 * GET home page.
 */

exports.view = function(req, res){
  var USERID = req.cookies.TBuserID;
  if(USERID!=""){
     models.Contact.find({"_id" : USERID}).exec(function(contactnamesingrouperr, data){

    var homepage = data[0]['defaultgroup'];
    res.writeHead(302, {
    'Location': '/groups/'+ homepage
    //add other headers here...
    });
    res.end();
    return;
    });
  }
  else{
  res.render('index',{
  	'projects': [
      { 'name': 'Waiting in Line',
        'image': 'lorempixel.people.1.jpeg',
        'id': 'project1'
      },
      { 'name': 'Needfinding',
        'image': 'lorempixel.city.1.jpeg',
        'id': 'project2'
      },
      { 'name': 'Prototyping',
        'image': 'lorempixel.technics.1.jpeg',
        'id': 'project3'
      },
      { 'name': 'Heuristic Evaluation',
        'image': 'lorempixel.abstract.1.jpeg',
        'id': 'project4'
      },
      { 'name': 'Visualization',
        'image': 'lorempixel.abstract.8.jpeg',
        'id': 'project5'
      },
      { 'name': 'Social design',
        'image': 'lorempixel.people.2.jpeg',
        'id': 'project6'
      },
      { 'name': 'Gestural interaction',
        'image': 'lorempixel.technics.2.jpeg',
        'id': 'project7'
      },
      { 'name': 'Design tools',
        'image': 'lorempixel.city.2.jpeg',
        'id': 'project8'
      }
    ]
  });
}
};