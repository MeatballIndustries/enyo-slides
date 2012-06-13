enyo.kind({
  kind: "Slides.CodePlayer",
  name: "slide3",

  create: function() {
    this.inherited(arguments);
    this.codeSamples.push( {name: "Page 1", code: "{kind: 'enyo.Control', content: 'hello world!'}"} );
    this.codeSamples.push( {name: "Page 2", code: "{kind: 'enyo.Control', content: 'hello world!'}"} );
    this.$.sampleSelect.selected = 0;

    this.updateSampleSelect();
  }

});
