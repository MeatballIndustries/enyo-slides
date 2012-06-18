enyo.kind({
  kind: "slidedeck.CodeSlide",
  name: "kindsPlayground",

  create: function() {
    this.inherited(arguments);

    this.setCodeSamples(["sample1"]);
    this.setTitle("Kinds Playground");
  }
});
