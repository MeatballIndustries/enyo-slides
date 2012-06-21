enyo.kind({
  kind: 'slidedeck.Slide',
  name: 'enyoFuture',

  components: [
    {
      kind: 'onyx.Toolbar',
      content: 'Back to the Future of Enyo'
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
                  content: 'Enyo'
                },
                {
                  tag: 'ul',
                  components: [
                    {
                      tag: 'li',
                      content: 'Release Candidate 1 is on the horizon - hopefully next month'
                    },
                    {
                      tag: 'li',
                      content: 'More Onyx widgets'
                    },
                    {
                      tag: 'li',
                      content: 'Some kind of templating - looking at Mustache'
                    },
                    {
                      tag: 'li',
                      content: 'Wrapping more 3rd party libraries'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          tag: 'ul',
          style: 'width: 50%;',
          components: [
            {
              tag: 'li',
              components: [
                {
                  content: 'Ares (Browser-based IDE for Enyo apps)'
                },
                {
                  tag: 'ul',
                  components: [
                    {
                      tag: 'li',
                      content: 'Drag-and-drop UI editor'
                    },
                    {
                      tag: 'li',
                      content: 'Code completion'
                    },
                    {
                      tag: 'li',
                      content: 'Components to extend local and cloud storage'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      kind: 'enyo.Image',
      src: '$presentation/assets/images/back-to-the-future.png',
      style: 'display: block; margin: 0 auto;'
    }
  ]
});
