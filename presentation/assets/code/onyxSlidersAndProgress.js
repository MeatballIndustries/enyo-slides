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

  updateProgress: function(inSender, inEvent) {
    this.$.progressBar1.animateProgressTo(inEvent.value);
    this.$.progressBar2.animateProgressTo(inEvent.value);
    this.$.progressBar3.animateProgressTo(inEvent.value);
    this.$.progressButton1.animateProgressTo(inEvent.value);
    this.$.progressButton2.animateProgressTo(inEvent.value);
    this.$.progressButton3.animateProgressTo(inEvent.value);
    this.$.valueDiv.content = inEvent.value;
    this.$.valueDiv.render();
  }
});
