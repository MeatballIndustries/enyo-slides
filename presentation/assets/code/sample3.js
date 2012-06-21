// Load and Run Sample1 and Sample2 first
enyo.kind({
  name: 'Sample3',
  components: [
    {kind: 'Sample1'},
    {kind: 'Sample2'}
  ]
});