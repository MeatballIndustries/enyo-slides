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
    {
      name: 'mainLayout',
      kind: 'FittableRows',
      classes: 'enyo-fit',
      components: [
        {
          kind: 'questionSlideable'
        },
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
            {
              kind: 'onyx.Button',
              allowHtml: true,
              content: '&larr; Back',
              onclick: 'previousSlide'
            },
            {
              name: 'followAlongToggle',
              kind: 'onyx.ToggleButton',
              value: true
            },
            {
              kind: 'onyx.ProgressBar',
              name: 'slidesProgress',
              position: '0',
              style: 'height: 12px; margin: 10px !important;',
              fit: true
            },
            {
              kind: 'onyx.Button',
              allowHtml: true,
              content: 'Next &rarr;',
              onclick: 'nextSlide'
            }
          ]
        }
      ]
    }
  ],

  socket: null,

  create: function() {
    // Has to be called to fire the super-class create method
    this.inherited(arguments);

    // Loop through the slides array to setup initial slides
    enyo.forEach(slideOrder, this.setupSlide, this);

    this.socket = new Socket({
      on: [
        {
          name: 'changeSlide',
          callback: enyo.bind(this, this.changeSlide)
        }
      ]
    });

    if(window.location.search === '?presenter'){
      this.socket.emit('set presenter');
    }

    // Set the max of progress bar when slides are created
    var full = this.$.slidesPanes.getPanels().length;
    this.$.slidesProgress.max = full;

    // Update progress to the current slide
    this.updateProgress();

    // Special Palm device code?
    if(window.PalmSystem){
      window.PalmSystem.stageReady();
    }
  },

  setupSlide: function(kindName) {
    this.$.slidesPanes.addSlide({
      kind: kindName
    });
  },

  changeSlide: function(slideIndex){
    if(this.$.followAlongToggle.value){
      this.$.slidesPanes.goToSlide(slideIndex);
    }
  },

  // Slide navigation
  nextSlide: function() {
    this.$.slidesPanes.next();
  },

  previousSlide: function() {
    this.$.slidesPanes.previous();
  },

  updateProgress: function() {
    // Animate progress bar to the current slide
    var current = this.$.slidesPanes.index + 1; // Zero based index
    this.$.slidesProgress.animateProgressTo( current );
    this.socket.emit('slideChanged', this.$.slidesPanes.index);
  },

  focusName: function(){
    // If questionSlideable is shown
    if(this.$.questionSlideable.value === -100){
      // focus on nameInput which is a child of questionSlideable
      this.$.questionSlideable.$.nameInput.focus();
    }
  }

});