enyo.kind({
  kind: "slidedeck.Slide",
  name: "title",
  classes: 'title-slide',

  components: [
    {tag: "div", classes: "title-text", components: [
      {tag: "h1",  content: "EnyoJS as a Framework for Great Justice"},
      {tag: "h2",  content: "Blaine Bublitz and Ryan Rix"},
      {tag: "h2",  content: "(@BlaineBublitz and @rrrrrrrix)"}
    ]}
  ]
});
