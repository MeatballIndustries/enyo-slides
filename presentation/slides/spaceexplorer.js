enyo.kind({
  name: "spaceexplorer",
  kind: 'slidedeck.Slide',

  components: [
    {
      kind: 'onyx.Toolbar',
      content: 'SpaceExplorer'
    },
    {
      tag: 'ul',
      components: [
        {
          tag: 'li',
          content: 'Phase two evolution of HslLock'
        },
        {
          tag: 'li',
          content: 'Pulls in information spaces around the world'
        },
        {
          tag: 'li',
          content: ''
        }
      ]
    }
  ]
});

