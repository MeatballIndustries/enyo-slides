enyo.kind({
  kind: "enyo.Control",
  name: "Slides.SlidesPane",
  published: {
    count: 0,
    position: 0
  },

  addSlide: function( component ) {
    enyo.log( "Adding component:" );
    enyo.log( component );

    var instance = this.createComponent( component, {owner: this} );

    this.render();
  },

  nextSlide: function() {
    enyo.log("Unimp");
  },

  previousSlide: function() {
    enyo.log("Unimp");
  },

  cleanOut: function() {
    this.destroyComponents();
  },

  goToSlide: function( idx ) {
    enyo.log("Unimp");
  }
});
