enyo.kind({
  kind: 'slidedeck.Slide',
  name: 'community',

  components: [
    {
      kind: 'onyx.Popup',
      name: 'teamPopup',
      style: 'width:100%',
      components: [
        {
          kind: 'enyo.Image',
          style: 'width:100%; height:100%; display: block; margin 0 auto;',
          src: '$presentation/assets/images/enyojs-team.jpg',
          onclick: 'hidePopup'
        }
      ]
    },
    {
      kind: 'onyx.Toolbar',
      content: 'The Awesome Enyo Community'
    },
    {
      tag: 'ul',
      components: [
        {
          tag: 'li',
          components: [
            {
              content: 'Getting help is easy'
            },
            {
              tag: 'ul',
              components: [
                {
                  tag: 'li',
                  components: [
                    {
                      tag: 'a',
                      attributes: {
                        href: 'http://forums.enyojs.com/categories/enyo-2'
                      },
                      content: 'EnyoJS forums'
                    }
                  ]
                },
                {
                  tag: 'li',
                  content: '#EnyoJS on Freenode'
                }
              ]
            }
          ]
        },
        {
          tag: 'li',
          content: 'Team Enyo is Awesome'
        },
        {
          style: 'height: 300px;',
          kind: 'enyo.Image',
          src: '$presentation/assets/images/enyojs-team.jpg',
          onclick: 'popupTeam'
        }
      ]
    }
  ],

  popupTeam: function(inSender) {
    this.$.teamPopup.show();
  },

  hidePopup: function(inSender) {
    this.$.teamPopup.hide();
  }
});
