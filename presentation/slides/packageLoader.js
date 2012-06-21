enyo.kind({
  kind: 'slidedeck.Slide',
  name: 'packageLoader',

  components: [
    {
      kind: 'onyx.Toolbar',
      content: 'Package Loader'
    },
    {
      kind: 'enyo.FittableColumns',
      components: [
        {
          style: 'width: 50%;',
          components: [
            {
              tag: 'ul',
              components: [
                {
                  tag: 'li',
                  components: [
                    {
                      content: 'Why a custom loader?'
                    },
                    {
                      tag: 'ul',
                      components: [
                        {
                          tag: 'li',
                          content: 'Less tags to write in HTML'
                        },
                        {
                          tag: 'li',
                          content: 'Uniform way to include files'
                        },
                        {
                          tag: 'li',
                          content: 'Allows for structured apps'
                        },
                        {
                          tag: 'li',
                          content: 'Encapsulate standalone packages'
                        }
                      ]
                    }
                  ]
                },
                {
                  tag: 'li',
                  components: [
                    {
                      content: 'What can be loaded?'
                    },
                    {
                      tag: 'ul',
                      components: [
                        {
                          tag: 'li',
                          content: 'Scripts'
                        },
                        {
                          tag: 'li',
                          content: 'Stylesheets'
                        },
                        {
                          tag: 'li',
                          content: 'Packages'
                        },
                        {
                          tag: 'li',
                          content: 'Even from external sources!'
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
          fit: true,
          components: [
            {
              kind: "Selection",
              onSelect: "select",
              onDeselect: "deselect"
            },
            {
              kind: "Scroller",
              fit: true,
              style: 'font-size: 1.4em;',
              components: [
                {
                  kind: "Node",
                  icon: "presentation/assets/images/folder-open.png",
                  content: "Project",
                  expandable: true,
                  expanded: true,
                  onExpand: "nodeExpand",
                  onNodeTap: "nodeTap",
                  components: [
                    {
                      icon: "presentation/assets/images/file.png",
                      content: "package.js"
                    },
                    {
                      icon: "presentation/assets/images/file.png",
                      content: "index.html"
                    },
                    {
                      icon: "presentation/assets/images/folder.png",
                      content: "enyo",
                      expandable: true,
                      components: [
                        {
                          icon: "presentation/assets/images/folder.png",
                          content: "__A Bunch of Enyo Directories__"
                        },
                        {
                          icon: "presentation/assets/images/file.png",
                          content: "package.js"
                        },
                        {
                          icon: "presentation/assets/images/file.png",
                          content: "enyo.js"
                        },
                        {
                          icon: "presentation/assets/images/file.png",
                          content: "loader.js"
                        }
                      ]
                    },
                    {
                      icon: "presentation/assets/images/folder.png",
                      content: "lib",
                      expandable: true,
                      components: [
                        {
                          icon: "presentation/assets/images/folder.png",
                          content: "layout",
                          expandable: true,
                          components: [
                            {
                              icon: "presentation/assets/images/folder.png",
                              content: "__A Bunch of Layout Directories__"
                            },
                            {
                              icon: "presentation/assets/images/file.png",
                              content: "package.js"
                            }
                          ]
                        },
                        {
                          icon: "presentation/assets/images/folder.png",
                          content: "onyx",
                          expandable: true,
                          components: [
                            {
                              icon: "presentation/assets/images/folder.png",
                              content: "__A Bunch of Onyx Directories__"
                            },
                            {
                              icon: "presentation/assets/images/file.png",
                              content: "package.js"
                            }
                          ]
                        },
                        {
                          icon: "presentation/assets/images/folder.png",
                          content: "canvas",
                          expandable: true,
                          components: [
                            {
                              icon: "presentation/assets/images/file.png",
                              content: "package.js"
                            }
                          ]
                        },
                        {
                          icon: "presentation/assets/images/folder.png",
                          content: "extra",
                          expandable: true,
                          components: [
                            {
                              icon: "presentation/assets/images/folder.png",
                              content: "__A Bunch of Extra Directories__"
                            },
                            {
                              icon: "presentation/assets/images/file.png",
                              content: "package.js"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  nodeExpand: function(inSender, inEvent) {
    inSender.setIcon("presentation/assets/images/" + (inSender.expanded ? "folder-open.png" : "folder.png"));
  },
  nodeTap: function(inSender, inEvent) {
    var node = inEvent.originator;
    this.$.selection.select(node.id, node);
  },
  select: function(inSender, inEvent) {
    inEvent.data.$.caption.applyStyle("background-color", "lightblue");
  },
  deselect: function(inSender, inEvent) {
    inEvent.data.$.caption.applyStyle("background-color", null);
  }
});