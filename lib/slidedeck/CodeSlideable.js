enyo.kind({
  name: "CodeSlideable",
  kind: "enyo.Slideable",
  classes: "code-pullout",
  style: "z-index: 10; position: absolute; top: 0;",
  unit: "%",
  min: -100,
  value: -100,
  onAnimateFinish: 'focusName',

  components: [
    {
      kind: "onyx.Grabber",
      classes: "code-pullout-grabbutton"
    },
    {
      classes: "pullout-controls",
      components: [
        {
          kind: 'enyo.FittableColumns',
          classes: "pullout-controls",
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
    }
  ]
});
