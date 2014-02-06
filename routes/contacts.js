
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
      { 'name': 'Prototyping',
        'taskcount': '34'
      },
      { 'name': 'Heuristic Evaluation',
        'taskcount': '14'
      },
      
    ]
  });
};