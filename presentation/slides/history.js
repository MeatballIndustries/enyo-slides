enyo.kind({
  kind: 'slidedeck.Slide',
  name: 'history',

  components: [
    {
      kind: 'onyx.Toolbar',
      content: 'A Little History Lesson'
    },
    {
      tag: 'ul',
      components: [
        {
          tag: 'li',
          content: '2009 - Mojo Framework on Palm Pre'
        },
        {
          tag: 'li',
          content: '2011 - Enyo 1.0 on HP Touchpad'
        },
        {
          tag: 'li',
          content: '2012 (January) - Enyo 2.0-beta1 (and 1.0) released under Apache 2.0 License'
        },
        {
          tag: 'li',
          content: '2012 (February) - Enyo 2.0-beta2 released'
        },
        {
          tag: 'li',
          content: '2012 (March) - Enyo 2.0-beta3, Onyx, and fittable layouts released'
        },
        {
          tag: 'li',
          content: '2012 (April) - Enyo 2.0-beta4 and PhoneGap/Cordova support released'
        },
        {
          tag: 'li',
          content: '2012 (June) - Enyo 2.0-beta5, new layouts/onyx widgets, and bootplate released'
        }
      ]
    }
  ]
});