
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('contacts',{
    'mycontacts': [
      { 'name': 'Andrew Lin',
        'taskcount': '20'
      },
      { 'name': 'Karen Wu',
        'taskcount': '2'
      },
      { 'name': 'Clarence Siu',
        'taskcount': '34'
      },
      { 'name': 'Scott Klemmer',
        'taskcount': '14'
      },
      { 'name': 'Jessica Hsi',
        'taskcount': '24'
      },
      
    ]
  });
};