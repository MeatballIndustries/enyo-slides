enyo.kind({
  kind: 'slidedeck.Slide',
  name: 'questions',
  components: [
    {
      kind: 'onyx.Toolbar',
      content: 'Questions??'
    },
    {
      name: 'questionList',
      kind: 'Scroller',
      classes: 'enyo-fit',
      touch: true,
      style: 'margin: 60px 0 10px; font-size: 2em;'
    }
  ],
  addQuestion: function(question){
    this.$.questionList.createComponent({
      content: enyo.macroize('{$name}: {$question}', question),
      style: 'margin: 0 50px;'
    });
    this.render();
  }
});