import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(user) {
      if (confirm('Are you sure you want to delete this user')) {
        this.sendAction('destroyUser', user);
      }
    },
    destroyPost(post) {
      this.sendAction('destroyPost', post);
    }
  }
});
