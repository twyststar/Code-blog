import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,

  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    savePost() {
      var preview = []
       var content = this.get('content')
       var prep = content.split('');
      for (var i = 0; i <= 45; i++){
        preview.push(prep[i]);
      }
      console.log(preview)
      preview = preview.join('');
      var params = {
        title: this.get('title'),
        content: this.get('content'),
        preview: preview,
        user: this.get('user'),
      };
      console.log('inside new-post' + params);
      this.set('addNewPost', false);
      this.sendAction('savePost', params)
    }
  }
});
