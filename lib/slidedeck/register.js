var registerSlides = function() {
  var js_includes = [];

  // Iterate through _arguments_
  registerSlides.slideOrder = enyo.map(arguments, function(value, index) {
    if( /.*\.js/.exec(value) ) {
      js_includes.push(value);
    }

    return value;
  });

  enyo.depends.apply(this, js_includes);
};
