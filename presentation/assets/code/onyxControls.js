enyo.kind({
  kind: "onyx.Groupbox",
  name: "sampleGroupBox",
  fit: true,
  components: [
    {
      kind: "onyx.GroupboxHeader", 
      content: "GROUP BOXEN"
    },
    {
      kind: "Group",
      name: "toggleGroup",
      defaultKind: "onyx.ToggleButton", components: [
        {value: true},
        {},
        {}
      ]
    },
    {
      kind: "Group",
      name: "checkGroup",
      defaultKind: "onyx.Checkbox", components: [
        {value: true},
        {},
        {}
      ]
    },
    {
      kind: "Group",
      name: "buttonGroup",
      defaultKind: "onyx.Button", components: [
        {content: "Hello 1"},
        {content: "Hello 2"},
        {content: "Hello 3"}
      ]
    },
    {
      kind: "Group",
      defaultKind: "onyx.IconButton",
      components: [
        {src: "$lib/onyx/images/progress-button-cancel.png", active: true,},
        {src: "$lib/onyx/images/progress-button-cancel.png"},
        {src: "$lib/onyx/images/progress-button-cancel.png"}
      ]
    }
  ]
});
