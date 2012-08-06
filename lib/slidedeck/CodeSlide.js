enyo.kind({
  kind: "slidedeck.Slide",
  name: "slidedeck.CodeSlide",
  layoutKind: 'enyo.FittableRowsLayout',

  published: {
    codeSamples: [],
    title: "Playground"
  },

  components: [
    {
      kind: "onyx.Toolbar",
      name: "titleBar",
      content: "Playground"
    },
    {
      fit: true,
      kind: 'enyo.FittableColumns',
      components: [
        {
          fit: true,
          kind: 'enyo.FittableRows',
          style: 'padding: 5px;',
          components: [
            {
              kind: 'CodeSlideable'
            },
          ]
        },
        {
          fit: true,
          kind: 'CodePlayer',
          style: 'width: 50%; padding: 10px;',
          go: function(inCode){
            this.destroyClientControls();
            try {
              var stripWhitespace = inCode.replace(/\s/g, '') // Fuck whitespace
                , regexResults = /\S*?name:("|')(\w+)(\1)\S*/g.exec(stripWhitespace)
                , kindName = regexResults[2];
              this.evalCode(inCode);
              this.createComponent({kind: kindName});
              if (this.hasNode()) {
                this.render();
              }
            } catch(e) {
              console.error("Error creating code: " + e);
            }
          }
        }
      ]
    }
  ],

  create: function() {
    this.inherited(arguments);

    this.setTitle(this.title); // reload toolbar
  },

  setTitle: function(title) {
    this.$.titleBar.content = title;
  },

  renderIntoSandbox: function(inSender) {
    this.$.codePlayer.go(this.$.codeEditor.getValue());
  },

  setCodeSamples: function(sampleArray) {
    for(var idx = 0; idx < sampleArray.length; idx++){
      var sampleFile = sampleArray[idx];
      // FIXME this.$.sampleSelect.createComponent({kind: "enyo.Option", content: sampleFile, value: sampleFile});
    }
    // FIXME this.$.sampleSelect.render();
  },

  loadFile: function() {
    var sampleFile = this.$.sampleSelect.getValue();
    this.$.codeEditor.setUrl("presentation/assets/code/" + sampleFile + ".js");
  }
});
