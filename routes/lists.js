
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('lists',{
  	'mylists': [
      { 'name': 'Daily Reminders',
        'taskcount': '20'
      },
      { 'name': 'Apartment Stuff',
        'taskcount': '2'
      },
      { 'name': 'CSE 170 Project',
        'taskcount': '34'
      },
      { 'name': 'CSE 131 Compilers',
        'taskcount': '14'
      },
      { 'name': 'Groceries to buy',
        'taskcount': '5'
      },
      { 'name': 'Gifts to buy for people',
        'taskcount': '12'
      },
      { 'name': 'Gestural interaction',
        'taskcount': '7'
      }
    ]
  });
};