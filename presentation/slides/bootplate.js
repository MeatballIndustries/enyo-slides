enyo.kind({
  kind: 'slidedeck.Slide',
  name: 'bootplate',

  components: [
    {
      kind: 'onyx.Toolbar',
      components: [
        {
          style: 'text-decoration: line-through;',
          content: 'Bootstrap, Boilerplate, Boilerstrap, '
        },
        {
          content: 'Bootplate Your Project!'
        }
      ]
    },
    {
      tag: 'ul',
      components: [
        {
          tag: 'li',
          content: 'Starter template for an Enyo project'
        },
        {
          tag: 'li',
          content: 'Includes all Enyo packages'
        },
        {
          tag: 'li',
          components: [
            {
              content: 'Easy to obtain'
            },
            {
              tag: 'ul',
              components: [
                {
                  tag: 'li',
                  content: 'Can be cloned from Github (enyo, onyx and layout submodules)'
                },
                {
                  tag: 'li',
                  content: 'Or downloaded with source code from http://enyojs.com (includes all libraries)'
                }
              ]
            }
          ]
        },
        {
          tag: 'li',
          content: 'Scaffolds packages into correct directory structure'
        },
        {
          tag: 'li',
          content: 'Allows for easy deployment/packaging'
        },
        {
          tag: 'li',
          content: 'Contains API Viewer for quick reference'
        },
        {
          tag: 'li',
          content: 'Includes easy-to-overlook code'
        }
      ]
    }
  ]
});