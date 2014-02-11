
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('groups',{
  	'groups': [
      { 'name': 'CSE 170 Project',
        'image': 'lorempixel.people.1.jpeg',
        'id': 'project1'
      },
      { 'name': 'CSE 130',
        'image': 'lorempixel.city.1.jpeg',
        'id': 'project2'
      },
      { 'name': 'Apartment 3449',
        'image': 'lorempixel.technics.1.jpeg',
        'id': 'project3'
      },
      { 'name': 'Book Club',
        'image': 'lorempixel.abstract.1.jpeg',
        'id': 'project4'
      }
    ]
  });
};