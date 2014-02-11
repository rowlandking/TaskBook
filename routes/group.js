exports.viewProject = function(req, res) { 
  // controller code goes here 
  var name = req.params.name;
  console.log("The Group : " + name);
  res.render('groups',{
  	'projectName': name,
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
    ],
    'lists':[
    {
    	'name':'Chores',
    	'tasks':[
    	{
    		'name':'Wash Dishes',
        'filters': 'yellow',
        'id':'2',
        'index':'3'
    	},
  	  {
    		'name':'Clean Toilet',
        'filters': 'yellow',
         'id':'3',
        'index':'6'

    	},
      {
        'name':'Wipe Counters',
        'filters': 'yellow',
        'id':'4',
        'index':'8'
      },
      {
        'name':'Buy Toilet Paper',
        'filters': 'red',
        'id':'5',
        'index':'1'
      },
      {
        'name':'Get Eggs',
        'filters': 'yellow',
        'id':'6',
        'index':'5'
      },
      {
        'name':'Buy Cheese',
        'filters': 'yellow',
        'id':'7',
        'index':'9'
      },
      {
        'name':'Find Apartment Key',
        'filters': 'red',
        'id':'8',
        'index':'2'
      },
      {
        'name':'Walk Dog',
        'filters':'yellow',
        'id':'9',
        'index':'4'
      }
    	]
    },
    {
		'name':'Schoolwork',
    	'tasks':[
    	{
    		'name':'Turn in essay'
    	},
    	{
    		'name':'Read Chapter 1'
    	},
    	{
    		'name':'Finish lab'
    	}
    	]
    },

    ]
  });
};