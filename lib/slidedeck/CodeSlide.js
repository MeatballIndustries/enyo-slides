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
          kind: 'enyo.FittableRows',
          style: 'padding: 5px;',
          components: [
            {
              kind: 'CodeSlideable',
              name: 'codeSlideable',
              onRenderIntoSandbox: "renderIntoSandbox"
            }
          ]
        },
        {
          fit: true,
          kind: 'CodePlayer',
          style: 'padding: 10px; margin-left: 50px;',
          go: function(inCode){
            this.destroyClientControls();
            try {
              var stripWhitespace = inCode.replace(/\s/g, ''), // Fuck whitespace
                  regexResults = /\S*?name:("|')(\w+)(\1)\S*/g.exec(stripWhitespace),
                  kindName = regexResults[2];
              this.evalCode(inCode);
              this.createComponent({kind: kindName});

              this.parent.parent.$.codeSlideable.toggleSlideable();

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

  renderIntoSandbox: function(inSender, inKindName) {
    this.$.codePlayer.go(inKindName.code);
  },

  setCodeSamples: function(sampleArray) {
    this.$.codeSlideable.setCodeSamples(sampleArray);
  }
});
