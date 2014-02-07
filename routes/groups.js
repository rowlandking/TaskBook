
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('groups',{
    'mygroups': [
      { 'name': 'CSE 110 Group',
        'taskcount': '20',
        'id':'0'
      },
      { 'name': 'Apartment #3409',
        'taskcount': '2',
        'id':'1'
      },
      { 'name': 'CSE 170 Group',
        'taskcount': '34',
        'id':'2'
      }
     
    ]
  });
};