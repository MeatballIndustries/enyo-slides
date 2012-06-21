enyo.kind({
  kind: 'slidedeck.Slide',
  name: 'deployment',

  components: [
    {
      kind: 'onyx.Toolbar',
      content: 'Deployment'
    },
    {
      tag: 'ul',
      components: [
        {
          tag: 'li',
          content: 'Requires Node.js'
        },
        {
          tag: 'li',
          content: 'Concatenates and minifies CSS & JS'
        },
        {
          tag: 'li',
          content: 'enyo.css, enyo.js, app.css, app.js'
        },
        {
          tag: 'li',
          content: 'PhoneGap/Cordova support (Events Wrapper Kind - extra/phonegap)'
        },
        {
          tag: 'li',
          components: [
            {
              tag: 'a',
              content: 'Platform specific deployment',
              attributes: { href: 'https://github.com/enyojs/enyo/wiki/Platform-Specific-Deployment' }
            }
          ]
        }
      ]
    }
  ]
});