enyo.kind({
  kind: "slidedeck.Slide",
  name: "aboutUs",

  components: [
    {
      kind: "onyx.Toolbar", content: "We Are Kind Of Awesome"
    },
    {
      kind: 'enyo.FittableColumns',
      components:[
        {
          fit: true,
          name: "left_div",
        },
        {
          name: "right_div",
          style: 'width: 50%;',
          components: [
            {components: [
              {kind: "Image", src: "http://rix.si/assets/uploads/ryan_headshot.png", classes: "left-photo"},
              {components: [
                {tag: "span", classes: "strong", content: "Ryan Rix"},
                {tag: "span", content: " is an open source developer born in raised in the Valley. He has been developing mobile and desktop applications since 2005, and is involved in a number open source projects."},
                {content: "By day, Ryan is a Ruby on Rails developer with Rebelhold, LLC out of HeatSync Labs in Mesa, working on a number of client projects as well as open-source endevours."},
                {content: "By night, Ryan builds rockets, VPN darknets, communities and 3D printed dongs as one of the board members of HeatSync Labs, a hackerspace and community workshop in Mesa specializing in teaching and learning all forms of creation as well as pushing the limits of technologies of all kinds."},
                {tag: "br"}
              ]}
            ]},
            {components: [
              {tag: "span", content: "As seen on: "},
              {tag: "a", attributes: { href: "http://rix.si" }, content: "The blagosphere" },
              {tag: "span", content: " - "},
              {tag: "a", attributes: { href: "http://github.com/rrix" }, content: "Github" },
              {tag: "span", content: " - "},
              {tag: "a", attributes: { href: "http://rebelhold.com" }, content: "RebelHold" },
              {tag: "span", content: " - "},
              {tag: "a", attributes: { href: "http://twitter.com/rrrrrrrix" }, content: "Tweeters" },
              {tag: "span", content: " - "},
              {tag: "a", attributes: { href: "http://heatsynclabs.org" }, content: "HeatSync Labs" }
            ]}
]
        }
      ]
    }
  ]
});
