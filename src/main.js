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
        kind: 'Slides.SlidesPane',
        name: 'slidesPanes',
        fit:  true,
        onTransitionFinish: 'updateProgress'
      },
      {
        kind: 'onyx.Toolbar',
        layoutKind: 'FittableColumnsLayout',
        components: [
          {kind:      'onyx.Button',
           allowHtml: true,
           content:   '&larr; Back',
           onclick:   'previousSlide'},
          {kind:      'onyx.ProgressBar',
           name:      'slidesProgress',
           position:  '50',
           style:     'height: 12px; margin: 10px !important;',
           fit:       true},
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

    enyo.map( slideOrder, this.setupSlide, this );
    this.updateProgress();

    if( window.PalmSystem ) {
      window.PalmSystem.stageReady();
    }
  },

  setupSlide: function( kindName ) {
    this.$.slidesPanes.addSlide({kind:kindName});
  },

  // {{{1 Slide navigation
  nextSlide: function() {
    this.$.slidesPanes.next();
  },

  previousSlide: function() {
    this.$.slidesPanes.previous();
  },

  updateProgress: function() {
    var full = this.$.slidesPanes.getPanels().length;
    var current = this.$.slidesPanes.index + 1; // Zero based index

    this.$.slidesProgress.max = full;
    this.$.slidesProgress.animateProgressTo( current );
  }
});

