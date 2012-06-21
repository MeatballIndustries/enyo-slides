// Load and Run Sample1 and Sample2 first
enyo.kind({
  name: 'Sample4',
  components: [
    { tag: 'ul',
      components: [
        { tag: 'li',
          components: [
            {kind: 'Sample1'}
          ]
        },
        { tag: 'li',
          components: [
            { kind: 'Sample2',
              style: 'font-size: 1em;'
            }
          ]
        }
      ]
    }
  ]
});