exports.packagejs = function(req, res){
  res.end(
    'enyo.depends("socket.io/socket.io.js", "onyx/", "layout/", "layout/panels", "src/", "presentation/" );'
  );
};

