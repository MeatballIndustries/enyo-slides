enyo.kind({
  kind: "slidedeck.CodeSlide",
  name: "onyxPlayground",

  create: function() {
    this.inherited(arguments);

    this.setCodeSamples(["onyxButtonsSimple", "onyxPopup","onyxSlidersAndProgress"]);
    this.setTitle("Onyx Widget Playground");
  }
});
