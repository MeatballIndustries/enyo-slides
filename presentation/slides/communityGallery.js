enyo.kind({
  kind: 'slidedeck.Slide',
  name: 'communityGallery',

  components: [
    {
      kind: 'onyx.Toolbar',
      content: 'Enhancements: Community Style'
    },
    {
      kind: 'enyo.FittableColumns',
      components: [
        {
          tag: 'ul',
          fit: true,
          components: [
            {
              tag: 'li',
              components: [
                {
                  content: 'Community Gallery'
                },
                {
                  tag: 'ul',
                  components: [
                    {
                      tag: 'li',
                      content: 'User submitted add-ons, libraries or packages'
                    },
                    {
                      tag: 'li',
                      content: 'Hosted on Github Pages'
                    },
                    {
                      tag: 'li',
                      content: 'Uses pull requests to submit projects'
                    }
                  ]
                }
              ]
            },
            {
              tag: 'li',
              components: [
                {
                  content: 'What types of projects are there?'
                },
                {
                  tag: 'ul',
                  components: [
                    {
                      tag: 'li',
                      content: 'Widgets'
                    },
                    {
                      tag: 'li',
                      content: 'Storage/Database Adapters'
                    },
                    {
                      tag: 'li',
                      content: 'Request Adapters'
                    },
                    {
                      tag: 'li',
                      content: 'Layout Kinds'
                    },
                    {
                      tag: 'li',
                      content: 'Even a keyboard and joystick!'
                    }
                  ]
                }
              ]
            },
            {
              tag: 'li',
              components: [
                {
                  tag: 'a',
                  content: 'http://enyojs.com/gallery/',
                  attributes: { href: 'http://enyojs.com/gallery/' }
                }
              ]
            }
          ]
        },
        {
          style: 'width: 300px;',
          components: [
            {
              kind: 'enyo.Image',
              src: '$presentation/assets/images/gts.DatePicker.jpg'
            },
            {
              kind: 'enyo.Image',
              src: '$presentation/assets/images/MachiApps.ColorPicker.jpg'
            },
            {
              kind: 'enyo.Image',
              src: '$presentation/assets/images/gts.Keyboard.jpg'
            }
          ]
        }
      ]
    }
  ]
});