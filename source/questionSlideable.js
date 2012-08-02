enyo.kind({
  name: 'questionSlideable',
  kind: "enyo.Slideable",
  classes: "pullout",
  style: "z-index: 10; position: absolute; right: -274px; top: 0;",
  unit: "%",
  min: -100,
  value: 0,
  onAnimateFinish: 'focusName',
  components: [
    {
      classes: "pullout-controls",
      components: [
        {
          content: 'Ask a Question:'
        },
        {
          kind: 'onyx.InputDecorator',
          classes: 'name-decorator',
          components: [
            {
              name: 'nameInput',
              kind: 'Input',
              placeholder: 'Please Enter Your Name'
            }
          ]
        },
        {
          kind: 'onyx.InputDecorator',
          components: [
            {
              name: 'questionInput',
              kind: 'TextArea',
              style: 'height: 8em;',
              placeholder: 'Enter Your Question Here'
            }
          ]
        },
        {
          name: 'submitQuestionButton',
          kind: 'onyx.Button',
          classes: 'onyx-blue',
          content: 'Submit Question',
          onclick: 'submitQuestion'
        }
      ]
    },
    {
      kind: "onyx.Grabber",
      classes: "pullout-grabbutton"
    }
  ],

  submitQuestion: function(){
    var name = this.$.nameInput.getValue().trim()
      , question = this.$.questionInput.getValue().trim();
    if(name && question){
      this.owner.socket.emit('newQuestion', { name: name, question: question });
    }
  }
});
