var registerSlides = function() {
  var js_includes = [];

  // Iterate through _arguments_
  this.slideOrder = enyo.map(arguments, function(value, index) {
    if( /.*\.js/.exec(value) ) {
      js_includes.push(value);
    }

    return value;
  });

  console.log(js_includes);
  console.log(this.slideOrder);

  enyo.depends(js_includes);
};
