{
  kind: "Slides.Slide",
  name: "slide3",
  style: 'float:right',

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
    this.$.number.content = value;
    this.$.number.render();

    enyo.log("test");
  }
}
