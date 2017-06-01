import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    savePost() {
      var params = {
        title: this.get('title'),
        user: this.get('user'),
        post: this.get('content'),
        // tags: this.get('tags'),
      };
      console.log('inside new-post' + params);
      this.set('addNewPost', false);
      this.sendAction('savePost', params)
    }
  }
});
