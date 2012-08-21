enyo.kind( {
  kind: 'slidedeck.Slide',
  name: 'slidedeck.HTMLSlide',

  published: {
    url: ""
  },

  create: function() {
    this.inherited(arguments);

    this.ajaxFetch = new enyo.Ajax( {url: this.url} );
    this.ajaxFetch.response( function(inSender, inResponse) {
      this.allowHTML = true;
      this.setContent(inResponse);
    });
  }
});
