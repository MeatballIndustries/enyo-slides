enyo.kind({
  kind: 'slidedeck.Slide',
  name: 'benefits',

  components: [
    {
      kind: 'onyx.Toolbar',
      content: 'What Are The Benefits?'
    },
    {
      tag: 'ul',
      components: [
        {
          tag: 'li',
          content: 'Object-Oriented abstraction'
        },
        {
          tag: 'li',
          content: 'Focus on components'
        },
        {
          tag: 'li',
          content: 'Package-based loader'
        },
        {
          tag: 'li',
          content: 'Onyx widget library'
        },
        {
          tag: 'li',
          content: 'Layout library for complicated layouts'
        },
        {
          tag: 'li',
          content: 'Community Gallery of user components'
        },
        {
          tag: 'li',
          content: 'Best of all - no HTML!'
        }
      ]
    }
  ]
});