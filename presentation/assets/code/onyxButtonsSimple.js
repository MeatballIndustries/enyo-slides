enyo.kind({
  kind: "enyo.Control",
  name: "OnyxButtonSample",
  components: [
    {kind: "onyx.Button",
     onclick: "updateValue",
     content: "This is a button subclass!"},
    {kind: "enyo.Control",
     name: "outputControl",
     value: 0}
  ],

  updateValue: function(inSender) {
    this.$.outputControl.value++;

    this.$.outputControl.setContent( this.$.outputControl.value );
  }
});
