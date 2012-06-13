enyo.kind({
  kind: "Slides.Slide",
  name: "slide3",

  components: [
    {classes: "div-left", components: [
      {kind: "onyx.InputDecorator", fit:true, components: [
        {kind: "onyx.TextArea", name: "sourceText", fit:true, placeholder: "Type some Enyo!"}
      ]},
      {kind: "onyx.Button", content: "Make it so!", onclick: "renderIntoSandbox"}
    ]},
    {classes: "div-right", name: "sandbox"}
  ],

  create: function() {
    this.inherited(arguments);
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
        if( !eval(saneName) ) {
          return saneName;
        }
      } catch(e) {
        enyo.log(saneName + " kind name is taken. Inceptioning.");
        saneName = saneName + "_";
      }
    }
  }
});
