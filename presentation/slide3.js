enyo.kind({
  kind: "Slides.Slide",
  name: "slide3",

  published: {
    codeSamples: [] // array of {name: "foo", code: "bar"} hashes
  },

  components: [
    {classes: "left-div", components: [
      {kind: "enyo.Select", name: "sampleSelect", fit: true },
      {kind: "onyx.Button", name: "loadEmUp", onclick: "loadEmUp", content: "Load" },
      {kind: "onyx.InputDecorator", fit:true, components: [
        {kind: "onyx.TextArea", name: "sourceText", fit:true, placeholder: "Type some Enyo!"}
      ]},
      {kind: "onyx.Button", content: "Make it so!", onclick: "renderIntoSandbox"}
    ]},
    {classes: "right-div", name: "sandbox"}
  ],

  create: function() {
    this.inherited(arguments);
    this.codeSamples.push( {name: "Page 1", code: "{kind: 'enyo.Control', content: 'hello world!'}"} );
    this.codeSamples.push( {name: "Page 2", code: "{kind: 'enyo.Control', content: 'hello world!'}"} );
    this.$.sampleSelect.selected = 0;

    this.updateSampleSelect();
  },

  updateSampleSelect: function() {
    this.$.sampleSelect.destroyClientControls();

    for( var idx in this.codeSamples ) {
      var sample = this.codeSamples[idx];
      this.$.sampleSelect.createComponent({tag: "option", content: sample.name, value: sample.code});
    }

    this.$.sampleSelect.render();
  },

  renderIntoSandbox: function(inSender) {
    try {
      this.$.sandbox.destroyClientControls();

      source = eval("(" + this.getSource() + ")");

      var inprops = {name: source.name};
      inprops.name = this.uniqueKindName(source.name);

      enyo.mixin(source, inprops);
      enyo.kind(source);

      var component = this.$.sandbox.createComponent({kind: inprops.name});
      component.render();
    } catch(e) {
      console.error("Could not create component: "+ e);
    }
  },

  getSource: function() {
    return this.$.sourceText.node.value;
  },

  uniqueKindName: function(inName) {
    var saneName = inName;

    while(1 == 1) {
      try{
        eval(saneName)
        enyo.log(saneName + " kind name is taken. Inceptioning.");
        saneName = saneName + "_";
      } catch(e) {
        if(e.type = "not_defined") {
          return saneName;
        }
      }
    }
  },

  jamItIn: function(codeToJam) {
    this.$.sourceText.node.value = codeToJam;
    this.renderIntoSandbox(codeToJam);
  },

  loadEmUp: function(inSender) {
    this.jamItIn( this.codeSamples[this.$.sampleSelect.selected].code );
  }
});
