
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
      { 'name': 'Melissa Cameron',
        'taskcount': '24'
      },
      { 'name': 'Galit Hofree',
        'taskcount': '24'
      },
      { 'name': 'Melody Kim',
        'taskcount': '76'
      },
      { 'name': 'Adam Mekrut',
        'taskcount': '17'
      },
      { 'name': 'Laura Pina',
        'taskcount': '98'
      },
      { 'name': 'Yu Xia',
        'taskcount': '45'
      },
      
    ]
  });
};