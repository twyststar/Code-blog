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
        post: this.get('content'),
        // tags: this.get('tags'),
        user: this.get('user'),
      };
      this.set('addNewPost', false);
      this.sendAction('savePost', params)
    }
  }
});
