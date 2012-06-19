enyo.kind({
  kind: 'enyo.Control',
  name: 'OnyxSlidersAndProgress',

  components: [
    {
      kind: "onyx.Slider",
      name: "slider1",
      onChanging: "updateProgress"
    },
    {
      kind: "onyx.ProgressBar",
      name: "progressBar1"
    },
    {
      kind: "onyx.ProgressBar",
      name: "progressBar2",
      animateStripes: false,
      barClasses: "onyx-light"
    },
    {
      kind: "onyx.ProgressBar",
      name: "progressBar3",
      showStripes: false
    },
    {
      kind: "onyx.ProgressButton",
      name: "progressButton1",
      onclick: "resetSlider"
    },
    {
      kind: "onyx.ProgressButton",
      name: "progressButton2",
      onclick: "resetSlider",
      components: [
        {content: "Start"},
        {content: "End", style: "float: right;"}
      ]
    },
    {
      kind: "onyx.ProgressButton",
      name: "progressButton3",
      showStripes: false,
      onclick: "resetSlider"
    },
    {
      name: "valueDiv"
    }
  ],

  resetSlider: function(inSender) {
    // this is ugly, but it's sample code
    this.$.progressBar1.setProgress(0);
    this.$.progressBar2.setProgress(0);
    this.$.progressBar3.setProgress(0);
    this.$.progressButton1.setProgress(0);
    this.$.progressButton2.setProgress(0);
    this.$.progressButton3.setProgress(0);
    this.$.slider1.setValue(0);
    this.$.valueDiv.setContent(0);
  },

  updateProgress: function(inSender, inEvent) {
    // this is ugly, but it's sample code
    this.$.progressBar1.setProgress(inEvent.value);
    this.$.progressBar2.setProgress(inEvent.value);
    this.$.progressBar3.setProgress(inEvent.value);
    this.$.progressButton1.setProgress(inEvent.value);
    this.$.progressButton2.setProgress(inEvent.value);
    this.$.progressButton3.setProgress(inEvent.value);
    this.$.valueDiv.content = inEvent.value;
    this.$.valueDiv.render();
  }
});
