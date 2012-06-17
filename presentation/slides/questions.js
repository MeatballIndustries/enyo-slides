enyo.kind({
  kind: 'slidedeck.Slide',
  name: 'questions',
  components: [
    {
      tag: 'h1',
      content: 'Questions??'
    },
    {
      name: 'questionList',
      kind: 'Scroller',
      maxHeight: '88%'
    }
  ],
  addQuestion: function(question){
    console.log(question);
    this.$.questionList.createComponent({
      content: enyo.macroize('{$name}: {$question}', question)
    });
    this.render();
  }
});