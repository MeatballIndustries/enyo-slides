enyo.kind({
  kind: "Slides.CodePlayer",
  name: "onyxPlayground",

  create: function() {
    this.inherited(arguments);

    this.setCodeSamples(["onyxButtons"]);
    this.setTitle("Onyx Widget Playground");
  }
});
