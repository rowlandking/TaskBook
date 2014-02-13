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
       'announcements': [
      { 'type': 'Reminder',
        'name': 'Buy Toilet Paper'
      },
      { 
        'type': 'Reminder',
        'name': 'Clean Toilet'
      }
    ],
    'lists':[
    {
      'id':'1',
    	'name':'Chores',
    	'tasks':[
    	{
    		'name':'Wash Dishes',
        'filters': 'ready',
        'name2':'Buy Cheese',
        'filters2': 'yellow',
        'id':'2',
        'index':'3'
    	},
  	  {
    		'name':'Clean Toilet',
        'filters': 'needsoon',
        'name2':'Buy Toilet Paper',
        'filters2': 'red',
         'id':'3',
        'index':'6'

    	},
      {
        'name':'Wipe Counters',
        'filters': 'needsoon',
        'name2':'Clean Toilet',
        'filters2': 'yellow',
        'id':'4',
        'index':'8'
      },
      {
        'name':'Buy Toilet Paper',
        'filters': 'urgent',
        'name2':'Find Apartment Key',
        'filters2': 'red',
        'id':'5',
        'index':'1'
      },
      {
        'name':'Get Eggs',
        'filters': 'needsoon',
        'name2':'Get Eggs',
        'filters2': 'yellow',
        'id':'6',
        'index':'5'
      },
      {
        'name':'Buy Cheese',
        'filters': 'ready',
        'name2':'Walk Dog',
        'filters2':'yellow',
        'id':'7',
        'index':'9'
      },
      {
        'name':'Find Apartment Key',
        'filters': 'ready',
        'name2':'Wash Dishes',
        'filters2': 'yellow',
        'id':'8',
        'index':'2'
      },
      {
        'name':'Walk Dog',
        'filters':'needsoon',
        'name2':'Wipe Counters',
        'filters2': 'yellow',
        'id':'9',
        'index':'4'
      }
    	]
    },
    {
    'id':'2',
		'name':'Schoolwork',
    	'tasks':[
    	{
    		'name':'Turn in essay',
        'name2':'Finish lab'
    	},
    	{
    		'name':'Read Chapter 1',
        'name2':'Read Chapter 1'
    	},
    	{
    		'name':'Finish lab',
        'name2':'Turn in essay'
    	}
    	]
    },

    ]
  });
};