enyo.kind({
  kind: 'slidedeck.Slide',
  name: 'layoutLibrary',

  components: [
    {
      kind: 'onyx.Toolbar',
      content: 'Layouts, For Fun and Profit'
    },
    {
      tag: 'ul',
      components: [
        {
          tag: 'li',
          components: [
            {
              content: 'Make your apps look more... app-like'
            },
            {
              tag: 'ul',
              components: [
                {
                  tag: 'li',
                  components: [
                    {
                      content: 'Fittable'
                    },
                    {
                      tag: 'ul',
                      components: [
                        {
                          tag: 'li',
                          content: 'enyo.FittableColumns && enyo.FittableColumnsLayout'
                        },
                        {
                          tag: 'li',
                          content: 'enyo.FittableRows && enyo.FittableRowsLayout'
                        }
                      ]
                    }
                  ]
                },
                {
                  tag: 'li',
                  components: [
                    {
                      content: 'List'
                    },
                    {
                      tag: 'ul',
                      components: [
                        {
                          tag: 'li',
                          content: 'enyo.FlyweightRepeater'
                        },
                        {
                          tag: 'li',
                          content: 'enyo.List'
                        }
                      ]
                    }
                  ]
                },
                {
                  tag: 'li',
                  content: 'Slideable'
                },
                {
                  tag: 'li',
                  components: [
                    {
                      content: 'Panels'
                    },
                    {
                      tag: 'ul',
                      components: [
                        {
                          tag: 'li',
                          content: 'arrangers (Card, CardSlideIn, Carousel, Collapsing, Others)'
                        },
                        {
                          tag: 'li',
                          components: [
                            {
                              tag: 'a',
                              content: 'more-arrangers (https://github.com/ShiftyAxel/more-arrangers)',
                              attributes: { href: "https://github.com/ShiftyAxel/more-arrangers" }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  tag: 'li',
                  content: 'Tree - WIP'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
});