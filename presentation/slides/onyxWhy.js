enyo.kind({
  kind: "slidedeck.Slide",
  name: "onyxWhy",

  components: [
    {
      kind: 'onyx.Toolbar',
      content: 'Onyx: Because plain widgets are boring'
    },
    {
      tag: 'ul',
      components: [
        {
          tag: 'li',
          components: [
            { 
              content: 'Leverage Enyo kinds',
            },
            {
              tag: 'ul',
              components: [
                {
                  tag: 'li',
                  content: 'Combine components naturally'
                },
                {
                  tag: 'li',
                  components: [
                    {
                      kind: 'onyx.Button',
                      content: 'Building new widgets is the same as anything else'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          tag: 'li',
          content: 'Elegant styling'
        },
        {
          tag: 'li',
          components: [
            {
              content: 'Easy to customise'
            },
            {
              tag: 'ul',
              components: [
                {
                  tag: 'li',
                  content: 'Everything is CSS'
                },
                {
                  tag: 'li',
                  content: 'Sub-kinds make awesome easy'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
});
