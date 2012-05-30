
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.presentation = function(req, res){
  res.end(
    'enyo.kind({name: "presentation"})'
  );
};

exports.packagejs = function(req, res){
  res.end(
      'enyo.depends( "onyx", "layout", "src/", "presentation/" );'
      )
}
