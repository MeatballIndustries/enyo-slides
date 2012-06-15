enyo.kind({
  kind: "Panels",
  name: "Slides.SlidesPane",
  arrangerKind: "HFlipArranger",

  addSlide: function(component) {
    var instance = this.createComponent(component, {owner: this});

    this.render();
  },

  cleanOut: function() {
    this.destroyComponents();
  },

  goToSlide: function(idx) {
    this.setIndex( idx );
  }
});
