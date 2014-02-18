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
    'contacts':[
          {
            'name': 'Thuy Pham'
          },
          {
            'name': 'Carla Sun'
          },
          {
            'name': 'Tim Pham'
          },
          {
            'name': 'Thuy Tran'
          },
          {
            'name': 'Diana Pham'
          },
          {
            'name': 'Marly Phung'
          },
          {
            'name': 'David Phan'
          },
          {
            'name': 'Troy Dam'
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
        'id':'2'
    	},
  	  {
    		'name':'Clean Toilet',
        'filters': 'needsoon',
         'id':'3'

    	},
      {
        'name':'Wipe Counters',
        'filters': 'needsoon',
        'id':'4'
      },
      {
        'name':'Buy Toilet Paper',
        'filters': 'urgent',
        'id':'5'
      },
      {
        'name':'Get Eggs',
        'filters': 'needsoon',
        'id':'6'
      },
      {
        'name':'Buy Cheese',
        'filters': 'ready',
        'id':'7'
      },
      {
        'name':'Find Apartment Key',
        'filters': 'ready',
        'id':'8'
      },
      {
        'name':'Walk Dog',
        'filters':'needsoon',
        'id':'9'
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