enyo.kind({
  name: "CodeSlideable",
  kind: "enyo.Slideable",
  classes: "code-pullout",
  style: "z-index: 10; position: absolute; top: 0;",
  unit: "%",
  min: -100,
  value: -100,
  max: 0,

  events: {
    onRenderIntoSandbox: ""
  },

  components: [
    {
      classes: "code-pullout-grabbutton-container",
      components: [
        {
          kind: "onyx.IconButton",
          name: "toggle",
          onclick: "toggleSlideable",
          ondrag:  "preventDrag",
          classes: "code-pullout-grabbutton",
          src: "$slidedeck/assets/right_arrow.png",
          isOpen: false
        }
      ]
    },
    {
      classes: "pullout-controls",
      components: [
        {
          kind: 'enyo.FittableColumns',
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
          layoutKind: "FittableColumnsLayout",
          components: [
            {
              kind: 'onyx.InputDecorator',
              fit: true,
              components: [
                {
                  fit: true,
                  kind: 'CodeEditor',
                  name: 'codeEditor',
                  style: 'height: 400px; font-size: 2em;',
                  placeholder: "Write some Enyo!"
                }
              ]
            }
          ]
        },
        {
          layoutKind: "FittableColumnsLayout",
          components: [
            {
              kind: "onyx.Button",
              content: "Make it so!",
              style: 'width: 100%;',
              onclick: "renderIntoSandbox"
            }
          ]
        }
      ]
    }
  ],

  toggleSlideable: function(inSender) {
    if(this.isOpen) {
      this.$.toggle.setSrc("$slidedeck/assets/right_arrow.png");
    } else {
      this.$.toggle.setSrc("$slidedeck/assets/left_arrow.png");
    }

    this.isOpen = !this.isOpen;

    this.toggleMinMax();
  },

  preventDrag: function(inSender, inEvent) {
    return true;
  },

  loadFile: function() {
    var sampleFile = this.$.sampleSelect.getValue();
    this.$.codeEditor.setUrl("presentation/assets/code/" + sampleFile + ".js");
  },

  setCodeSamples: function(sampleArray) {
    for(var idx = 0; idx < sampleArray.length; idx++){
      var sampleFile = sampleArray[idx];
      this.$.sampleSelect.createComponent({kind: "enyo.Option", content: sampleFile, value: sampleFile});
    }
    this.$.sampleSelect.render();
  },

  renderIntoSandbox: function(inSender) {
    var sampleCode = this.$.codeEditor.getValue();
    this.doRenderIntoSandbox( {code: sampleCode} );
  }
});
