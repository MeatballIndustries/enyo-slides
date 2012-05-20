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
      {
        kind: 'newness.InfiniteSlidingPane',
        name: 'slidesPane',
        fit:  true,
        viewTypes: [
          { kind: "Slides.Slide", name: "pageOne", content: 'Title Pane' }
        ]
      },
      {
        kind: 'onyx.Toolbar',
        layoutKind: 'FittableColumnsLayout',
        components: [
          {kind: 'onyx.Button', allowHtml: true, content: '&larr; Back'},
          {kind: 'onyx-custom.ProgressBar', position: '50', style: 'height: 12px; margin: 10px !important;', fit: true},
          {kind: 'onyx.Button', allowHtml: true, content: 'Next &rarr;'}
        ]
      }
    ]}
  ],

  create: function() {
    this.inherited(arguments);

    this.$.slidesPane.push('pageOne');
  }
});
