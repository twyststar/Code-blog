import Ember from 'ember';

export default Ember.Component.extend({
  updatePost: false,
  actions: {
    updatePostFormShow() {
      if(confirm("Are you the author/an authorized editor for this post?")){
      this.set('updatePost', true);
      }
    },
    delete(post) {
      if (confirm('Are you sure you want to delete this post')) {
        this.sendAction('destroyPost', post);
      }
    },

    update(post) {
      var params = {
        title: this.get('title'),
        content: this.get('content'),
      };
      this.set('updatePost', false);
      this.sendAction('update', post, params)
    }
  }
});
