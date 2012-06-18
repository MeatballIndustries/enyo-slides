enyo.kind({
  kind: 'slidedeck.Slide',
  name: 'oop',

  components: [
    {
      kind: 'onyx.Toolbar',
      content: 'Object-Orientation in Enyo'
    },
    {
      tag: 'ul',
      components: [
        {
          tag: 'li',
          components: [
            {
              content: 'Components'
            },
            {
              tag: 'ul',
              components: [
                {
                  tag: 'li',
                  content: 'Everything is components...'
                },
                {
                  tag: 'li',
                  content: '...Components are everything'
                }
              ]
            }
          ]
        },
        {
          tag: 'li',
          components: [
            {
              content: 'enyo.Control'
            },
            {
              tag: 'ul',
              components: [
                {
                  tag: 'li',
                  content: 'Basic building blocks'
                },
                {
                  tag: 'li',
                  content: 'Abstraction of HTML elements'
                }
              ]
            }
          ]
        },
        {
          tag: 'li',
          components: [
            {
              content: 'Encapsulation'
            },
            {
              tag: 'ul',
              components: [
                {
                  tag: 'li',
                  content: 'Components inside components inside components'
                }
              ]
            }
          ]
        },
        {
          tag: 'li',
          components: [
            {
              content: 'this.$'
            },
            {
              tag: 'ul',
              components: [
                {
                  tag: 'li',
                  content: 'Hash of references to sub-components'
                }
              ]
            }
          ]
        },
        {
          tag: 'li',
          components: [
            {
              content: 'enyo.kind'
            },
            {
              tag: 'ul',
              components: [
                {
                  tag: 'li',
                  content: 'Generates constructors that can inherit or be inherited'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
});