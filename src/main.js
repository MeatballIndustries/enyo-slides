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
        name: 'slidesPanes',
        fit:  true
      },
      {
        kind: 'onyx.Toolbar',
        layoutKind: 'FittableColumnsLayout',
        components: [
          {kind:      'onyx.Button',
           allowHtml: true,
           content:   '&larr; Back',
           onclick:   'previousSlide'},
          {
            kind: 'onyx.ProgressBar',
            progress: '50',
            animateStripes: false,
            style: 'height: 12px; margin: 10px !important;',
            fit: true
          },
          {kind:      'onyx.Button',
           allowHtml: true,
           content:   'Next &rarr;',
           onclick:   'nextSlide'}
        ]
      }
    ]}
  ],

  create: function() {
    this.inherited(arguments);

    var component = { kind: "Slides.Slide", name: "slide1", content: "Hello world 1!" };
    this.$.slidesPanes.viewTypes.push( component );
    component = { kind: "Slides.Slide", name: "slide2", content: "Hello world 2!" };
    this.$.slidesPanes.viewTypes.push( component );
    component = { kind: "Slides.Slide", name: "slide3", content: "Hello world 3!" };
    this.$.slidesPanes.viewTypes.push( component );
  },

  nextSlide: function() {
    component = this.$.slidesPanes.viewTypes[this.$.slidesPanes.getViewCount()];
    this.$.slidesPanes.push(component.name);
  },

  previousSlide: function() {
    this.$.slidesPanes.getView().pop();
  }
});

