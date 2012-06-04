enyo.kind({
  kind: 'Slides.Slide',
  name: 'questions',
  components: [
    {
      tag: 'h1',
      content: 'Questions??'
    }
  ],
  addQuestion: function(question){
    console.log(question);
    this.createComponent({
      content: enyo.macroize('{$name}: {$question}', question)
    });
    this.render();
  }
});