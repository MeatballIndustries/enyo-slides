
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