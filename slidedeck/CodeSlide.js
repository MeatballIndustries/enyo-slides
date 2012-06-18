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
              kind: 'enyo.FittableColumns',
              style: 'width: 100%; margin-bottom: 5px;',
              components: [
                {
                  fit: true,
                  kind: "enyo.Select",
                  name: "sampleSelect",
                  classes: 'onyx-button', // Super hacky, would be better to specify the same styles in a different class :P
                  style: 'padding-bottom: 5px;'
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
              style: 'width: 100%; font-size: 2em;'
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
      this.$.sampleSelect.createComponent({kind: "enyo.Option", content: sampleFile, value: sampleFile});
    }
    this.$.sampleSelect.render();
  },

  loadFile: function() {
    var sampleFile = this.$.sampleSelect.getValue();
    this.$.codeEditor.setUrl("presentation/assets/code/" + sampleFile + ".js");
  }
});
