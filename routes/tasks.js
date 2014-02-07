
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('tasks',{
  	'mytasks': [
      { 'name': 'Take out the trash',
        'id':'0',
        'status':'star'
      },
      { 'name': 'Buy Eggs',
        'id':'1',
        'status':'fire'
      },
      { 'name': 'Finish Week 5 Assignment',
        'id':'2'
      },
      { 'name': 'Create Documentation',
        'id':'3'
      },
      { 'name': 'Watch Lecture Videos',
        'id':'4'
      },
      { 'name': 'Study for Midterm',
        'id':'5'
      },
      { 'name': 'Go on a date',
        'id':'6'
      },
      { 'name': 'Learn Html & Css',
        'id':'7'
      },
      { 'name': 'Call Karen to set up group meeting',
        'id':'8'
      },
      { 'name': 'Call Clarence for spec sheets',
        'id':'9'
      },
      { 'name': 'Watch Captain America',
        'id':'10'
      },
      { 'name': 'Do the Heuristic Evaluation',
        'id':'11'
      },
      { 'name': 'Buy textbooks',
        'id':'12'
      },
      { 'name': 'Study for CSE 170 Midterm',
        'id':'13'
      },
      { 'name': 'Make a compiler',
        'id':'14'
      },
      { 'name': 'Have Fun',
        'id':'15'
      },
      { 'name': 'Go on a date',
        'id':'16'
      },
      { 'name': 'Learn Html & Css',
        'id':'17'
      },
      { 'name': 'Call Karen to set up group meeting',
        'id':'18'
      },
      { 'name': 'Call Clarence for spec sheets',
        'id':'19'
      },
      { 'name': 'Watch Captain America',
        'id':'20'
      },
      { 'name': 'Do the Heuristic Evaluation',
        'id':'21'
      }
    ]
  });
};