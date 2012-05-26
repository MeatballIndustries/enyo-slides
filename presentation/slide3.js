enyo.kind({
  kind: "Slides.Slide",
  name: "slide3",

  components: [
    {kind: "onyx.Button", name: "incrementor", onclick: "increment", content: "Count up!"},
    {name: "number", value: 0, content: 0}
  ],

  create: function() {
    this.inherited(arguments);
    enyo.log("test2");
  },

  increment: function() {
    this.$.number.value++;
    this.$.number.content = this.$.number.value;
    this.$.number.render();

    enyo.log("test");
  }
});
