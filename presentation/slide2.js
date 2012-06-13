enyo.kind({
  kind: "Slides.Slide",
  name: "slide2",

  components: [
    {kind: "onyx.Toolbar", components: [
      {tag: "h1", content: "Who are we?"}
    ]},
    {tag: "div", name: "left_div", classes: "left-div", components: [
      {content: "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource sucking relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service. Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables. Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products."}
    ]},
    {name: "right_div", classes: "right-div", components: [
      {components: [
        {kind: "Image", src: "http://rix.si/assets/uploads/ryan_headshot.png", classes: "left-photo"},
        {components: [
          {tag: "span", classes: "strong", content: "Ryan Rix"},
          {tag: "span", content: " is an open source developer born in raised in the Valley. He has been developing mobile and desktop applications since 2005, and is involved in a number open source projects."},
          {content: "By day, Ryan is a Ruby on Rails developer with Rebelhold, LLC out of HeatSync Labs in Mesa, working on a number of client projects as well as open-source endevours."},
          {content: "By night, Ryan builds rockets, VPN darknets, communities and 3D printed dongs as one of the board members of HeatSync Labs, a hackerspace and community workshop in Mesa specializing in teaching and learning all forms of creation as well as pushing the limits of technologies of all kinds."},
          {tag: "br"},
        ]},
      ]},
      {components: [
        {tag: "span", content: "As seen on: "},
        {tag: "a", attributes: { href: "http://rix.si", }, content: "The blagosphere" },
        {tag: "span", content: " - "},
        {tag: "a", attributes: { href: "http://github.com/rrix", }, content: "Github" },
        {tag: "span", content: " - "},
        {tag: "a", attributes: { href: "http://rebelhold.com", }, content: "RebelHold" },
        {tag: "span", content: " - "},
        {tag: "a", attributes: { href: "http://twitter.com/rrrrrrrix", }, content: "Tweeters" },
        {tag: "span", content: " - "},
        {tag: "a", attributes: { href: "http://heatsynclabs.org", }, content: "HeatSync Labs" },
      ]}
    ]}
  ],

  create: function() {
    this.inherited(arguments);
  }
});
