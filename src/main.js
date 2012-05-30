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
        ondragfinish: "dragfinish",
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

  slideUrls: [],  // Properly ordered list of slides' URLs.
  slidesCount: 0, // a counter, because I suck.

  create: function() {
    this.inherited(arguments);

    var component = { kind: "Slides.Slide", name: "baconwaffle", content: "We're loading your slides. Just a sec." };
    this.$.slidesPanes.addSlide( component );

    this.getSlidesIndexAjax = new enyo.Ajax({ url: "presentation/slides.json" });
    this.getSlidesIndexAjax.response(this, "gotSlides");
    this.getSlidesIndexAjax.go();

    this.nextSlide(); // start at slide 1
    if( window.PalmSystem ) {
      window.PalmSystem.stageReady();
    }
  },

  gotSlides: function(inRequest, inResponse) {
    enyo.log( "Got slides.json" );
    this.slideUrls = inResponse; 
    enyo.map( inResponse, this.setupSlide, this );
  },

  setupSlide: function( kindName ) {
    this.$.slidesPanes.addSlide({kind:kindName});
    this.updateProgress();
  },

  // {{{1 Slide navigation
  nextSlide: function() {
    if( this.$.slidesPanes.position < this.$.slidesPanes.count )
    {
      component = this.$.slidesPanes.viewTypes[this.$.slidesPanes.position];
      this.$.slidesPanes.push(component.name);
      this.updateProgress();
    }
  },

  previousSlide: function() {
    if( this.$.slidesPanes.position > 1 )
    {
        this.$.slidesPanes.getView().pop();
        setTimeout(enyo.bind(this,this.updateProgress), 500); // Fuck this.
    }
  },

  updateProgress: function() {
    var full = this.$.slidesPanes.count;
    var current = this.$.slidesPanes.position;

    this.$.slidesProgress.max = full;
    this.$.slidesProgress.animateProgressTo( current );
  },
  // }}}1

  dragfinish: function(inSender,inEvent) {
    var poop;
    if( inEvent.dx < -window.innerWidth/3 )
    {
      this.nextSlide();
    }
    setTimeout(enyo.bind(this,this.updateProgress), 500); // Fuck this.
  }
});

