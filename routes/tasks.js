
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('tasks',{
  	'mytasks': [
      { 'name': 'Waiting in Line',
        'taskcount': '20', 
        'id':'0'
      },
      { 'name': 'Needfinding',
        'taskcount': '2',
        'id':'1'
      },
      { 'name': 'Prototyping',
        'taskcount': '34',
        'id':'2'
      },
      { 'name': 'Heuristic Evaluation',
        'taskcount': '14',
        'id':'3'
      },
      { 'name': 'Visualization',
        'taskcount': '5',
        'id':'4'
      },
      { 'name': 'Social design',
        'taskcount': '12',
        'id':'5'
      },
      { 'name': 'Gestural interaction',
        'taskcount': '7',
        'id':'6'
      },
      { 'name': 'Design tools',
        'taskcount': '14',
        'id':'7'
      },
      { 'name': 'Waiting in Line',
        'taskcount': '20',
        'id':'8'
      },
      { 'name': 'Needfinding',
        'taskcount': '2',
        'id':'9'
      },
      { 'name': 'Prototyping',
        'taskcount': '34',
        'id':'10'
      },
      { 'name': 'Heuristic Evaluation',
        'taskcount': '14',
        'id':'11'
      },
      { 'name': 'Visualization',
        'taskcount': '5',
        'id':'12'
      },
      { 'name': 'Social design',
        'taskcount': '12',
        'id':'13'
      },
      { 'name': 'Gestural interaction',
        'taskcount': '7',
        'id':'14'
      },
      { 'name': 'Design tools',
        'taskcount': '14',
        'id':'15'
      }
    ]
  });
};