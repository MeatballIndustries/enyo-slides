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
            name: 'slidesProgress',
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

    this.nextSlide(); // start at slide 1
  },

  nextSlide: function() {
    if( this.$.slidesPanes.getViewCount() < this.$.slidesPanes.viewTypes.length )
    {
      component = this.$.slidesPanes.viewTypes[this.$.slidesPanes.getViewCount()];
      this.$.slidesPanes.push(component.name);
      this.updateProgress();
    }
  },

  previousSlide: function() {
    if( this.$.slidesPanes.getViewCount() > 1 )
    {
        this.$.slidesPanes.getView().pop();
        setTimeout(enyo.bind(this,this.updateProgress), 500); // Fuck this.
    }
  },

  updateProgress: function() {
    var full = this.$.slidesPanes.viewTypes.length;
    var current = this.$.slidesPanes.getViewCount();

    this.$.slidesProgress.max = full;
    this.$.slidesProgress.animateProgressTo( current );
  }
});

