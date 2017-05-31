import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    savePost1() {
      var params = {
        title: this.get('title'),
        user: this.get('user'),
        post: this.get('post'),
        tags: this.get('tags'),
      };
      this.set('addNewPost', false);
      this.sendAction('savePost2', params)
    }
  }
});
