
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('tasks',{
  	'mytasks': [
      { 'name': 'Waiting in Line',
        'id':'0',
        'status':'star'
      },
      { 'name': 'Needfinding',
        'id':'1',
        'status':'fire'
      },
      { 'name': 'Prototyping',
        'id':'2'
      },
      { 'name': 'Heuristic Evaluation',
        'id':'3'
      },
      { 'name': 'Visualization',
        'id':'4'
      },
      { 'name': 'Social design',
        'id':'5'
      },
      { 'name': 'Gestural interaction',
        'id':'6'
      },
      { 'name': 'Design tools',
        'id':'7'
      },
      { 'name': 'Waiting in Line',
        'id':'8'
      },
      { 'name': 'Needfinding',
        'id':'9'
      },
      { 'name': 'Prototyping',
        'id':'10'
      },
      { 'name': 'Heuristic Evaluation',
        'id':'11'
      },
      { 'name': 'Visualization',
        'id':'12'
      },
      { 'name': 'Social design',
        'id':'13'
      },
      { 'name': 'Gestural interaction',
        'id':'14'
      },
      { 'name': 'Design tools',
        'id':'15'
      }
    ]
  });
};