enyo.kind( {
  name: "Slides.Slide",
  kind: "Villo.Book",

  setContent: function(component) {
    this.content = component;

    this.destroyComponents();
    this.createComponent(this.content);
  }

});
