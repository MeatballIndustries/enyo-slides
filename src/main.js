enyo.kind({
  /*
   *  name:
   *  name of this "kind" (optionally namespaced with a .)
   */
  name: 'Slides.Main',
  /*
   *  components:
   *  Array of "kind" objects that compose the layout of your app
   */
  components: [
    {name: 'mainLayout', kind: 'FittableRows', classes: 'enyo-fit', components: [
      {fit: true},
      {
        kind: 'onyx.Toolbar',
        layoutKind: 'FittableColumnsLayout',
        components: [
          {kind: 'onyx.Button', allowHtml: true, content: '&larr; Back'},
          {fit: true},
          {kind: 'onyx.Button', allowHtml: true, content: 'Next &rarr;'}
        ]
      }
    ]}
  ]
});
