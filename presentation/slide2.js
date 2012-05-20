{
  kind: "Slides.Slide",
  name: "slide2",

  components: [
    {kind: "onyx.Button", name: "incrementor", onclick: "increment", content: "Count up!"},
    {name: "number", value: 0}
  ],

  create: function() {
    enyo.log("test2");
    this.inherited(arguments);
  },

  increment: function() {
    this.$.number.value++;
    this.$.number.content = value;
    this.$.number.render();

    enyo.log("test");
  }
}
