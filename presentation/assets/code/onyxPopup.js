enyo.kind({
  kind: "enyo.Control",
  name: "OnyxPopupSample",

  components: [
    {kind: "onyx.Button",
     classes: "onyx-affirmative",
     onclick: "showTwitterPopup",
     content: "Show me more about Enyo!"},
    {kind: "onyx.Popup",
     name: "enyoPopup",
     classes: "enyo-fit",
     components: [
       {tag: "iframe",
        src: "http://enyojs.com",
        classes: "enyo-fill",
        style: "border-none"}
    ]}
  ],

  showTwitterPopup: function(inSender) {
    this.$.enyoPopup.show();
  }
});
