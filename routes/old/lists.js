
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('lists',{
  	'mylists': [
      { 'name': 'Daily Reminders',
        'taskcount': '20',
        'id':'0'
      },
      { 'name': 'Apartment Stuff',
        'taskcount': '2',
        'id':'1'
      },
      { 'name': 'CSE 170 Project',
        'taskcount': '34',
        'id':'2'
      },
      { 'name': 'CSE 131 Compilers',
        'taskcount': '14',
        'id':'3'
      },
      { 'name': 'Groceries to buy',
        'taskcount': '5',
        'id':'4'
      },
      { 'name': 'Gifts to buy for people',
        'taskcount': '12',
        'id':'5'
      },
      { 'name': 'Gestural interaction',
        'taskcount': '7',
        'id':'6'
      }
    ]
  });
};