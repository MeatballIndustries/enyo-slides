var registerSlides = function() {
  // Iterate through _arguments_
  this.slideOrder = enyo.map(arguments, function(value, index) {
    console.log(value);
    return value;
  });

  enyo.depends(arguments);
};
