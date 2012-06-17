enyo.kind({
  kind: "enyo.Control",
  name: "OnyxPopupSample",

  components: [
    {kind: "onyx.Button",
     classes: "onyx-affirmative",
     onclick: "showTwitterPopup",
     content: "Follow Enyo on Twitter!"},
    {kind: "onyx.Popup",
     name: "twitterPopup",
     components: [
       {tag: "iframe",
        src: "http://twitter.com/enyojs",
        classes: "enyo-fill",
        style: "border-none"}
    ]}
  ],

  showTwitterPopup: function(inSender) {
    this.$.twitterPopup.show();
  }
});
