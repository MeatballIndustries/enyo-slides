enyo.kind({
  kind: 'slidedeck.Slide',
  name: 'whatIsIt',

  components: [
    {
      kind: 'onyx.Toolbar',
      content: 'What Is Enyo?'
    },
    {
      tag: 'h1',
      classes: 'center',
      content: 'Another F#^%&*g JavaScript Framework!?!?'
    },
    {
      kind: 'enyo.Image',
      src: 'presentation/assets/dojo-logo.png',
      classes: 'left-logo vendor-logo',
      style: 'top: 25%;'
    },
    {
      kind: 'enyo.Image',
      src: 'presentation/assets/kendo-logo.png',
      classes: 'left-logo vendor-logo',
      style: 'top: 45%;'
    },
    {
      kind: 'enyo.Image',
      src: 'presentation/assets/sencha-logo.png',
      classes: 'left-logo vendor-logo',
      style: 'top: 65%;'
    },
    {
      kind: 'enyo.Image',
      src: 'presentation/assets/wink-logo.png',
      classes: 'right-logo vendor-logo',
      style: 'top: 35%;'
    },
    {
      kind: 'enyo.Image',
      src: 'presentation/assets/jquery-mobile-logo.png',
      classes: 'right-logo vendor-logo',
      style: 'top: 70%;'
    },
    {
      kind: 'enyo.Image',
      src: 'presentation/assets/enyo-logo.png',
      style: 'display: block; margin: 0 auto;'
    }
  ]
});