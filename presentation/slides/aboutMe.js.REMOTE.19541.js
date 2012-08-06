enyo.kind({
  kind: "slidedeck.Slide",
  name: "aboutMe",

  components: [
    {
      components: [
        {
          kind: 'onyx.Toolbar',
          classes: 'top-toolbar',
          content: 'Ryan Rix — Just some guy'
        },
        {
          kind: "enyo.Image",
          classes: "right-photo",
          src: "/presentation/assets/images/ryan_headshot.png"
        },
        {
          tag: 'ul',
          components: [
            {
              tag: 'li',
              content: 'HeatSync Labs board member'
            },
            {
              tag: 'li',
              content: 'Open Source Guy'
            },
            {
              tag: 'li',
              content: 'Breaker of WebOS-CE Patches'
            },
            {
              tag: 'li',
              content: 'Qt and Enyo Developer'
            },
            {
              tag: 'li',
              content: 'During the day: Mobile and Web development consultant'
            },
            {
              tag: 'li',
              content: 'At night: 3D Printer, Rocketry hack, Hacker/Maker'
            }
          ]
        }
      ]
    },
    {
      style: 'text-align: center;',
      components: [
        {tag: "a", attributes: { href: "http://rix.si", target: "_blank" }, content: "The blagosphere" },
        {tag: "span", content: " - "},
        {tag: "a", attributes: { href: "http://github.com/rrix", target: "_blank" }, content: "Github" },
        {tag: "span", content: " - "},
        {tag: "a", attributes: { href: "http://twitter.com/rrrrrrrix", target: "_blank" }, content: "Tweeters" },
        {tag: "span", content: " - "},
        {tag: "a", attributes: { href: "http://heatsynclabs.org", target: "_blank" }, content: "HeatSync Labs" }
      ]
    }
  ]
});
