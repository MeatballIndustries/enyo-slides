enyo.kind({
  kind: "Slides.Slide",
  name: "Slides.CodePlayer",
  layoutKind: 'enyo.FittableRowsLayout',

  published: {
    codeSamples: []
  },

  components: [
    {
      kind: "onyx.Toolbar",
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
              kind: 'enyo.FittableColumns',
              style: 'width: 100%; margin-bottom: 5px;',
              components: [
                {
                  fit: true,
                  kind: "enyo.Select",
                  name: "sampleSelect",
                  classes: 'onyx-button', // Super hacky, would be better to specify the same styles in a different class :P
                  style: 'padding-bottom: 5px;',
                },
                {
                  kind: "onyx.Button",
                  name: "loadFile",
                  style: 'margin: 0 0 0 10px;',
                  onclick: "loadFile",
                  content: "Load"
                }
              ]
            },
            {
              fit: true,
              kind: 'CodeEditor',
              style: 'width: 100%;'
            },
            {
              kind: "onyx.Button",
              content: "Make it so!",
              style: 'width: 100%;',
              onclick: "renderIntoSandbox"
            }
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
                , regexResults = /\S*name:("|')(\w*)(\1)\S*/m.exec(stripWhitespace)
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

  renderIntoSandbox: function(inSender) {
    this.$.codePlayer.go(this.$.codeEditor.getValue());
  },

  setCodeSamples: function() {
    this.inherited(arguments);

    this.$.sampleSelect.destroyClientControls();
    for(var idx in arguments[0]) {
      var sampleFile = arguments[0][idx];
      this.$.sampleSelect.createComponent({tag: "option", content: sampleFile, value: sampleFile});
    }
    this.$.sampleSelect.render();
  },

  loadFile: function() {
    var sampleFile = this.$.sampleSelect.getValue();
    this.$.codeEditor.setUrl("presentation/assets/code/" + sampleFile + ".js");
  }
});
