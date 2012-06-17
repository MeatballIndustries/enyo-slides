enyo.kind({
  kind: "Slides.CodePlayer",
  name: "onyxPlayground",

  create: function() {
    this.inherited(arguments);

    this.setCodeSamples(["onyxButtonsSimple", "onyxPopup"]);
    this.setTitle("Onyx Widget Playground");
  }
});
