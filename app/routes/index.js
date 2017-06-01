import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      users: this.store.findAll('user'),
      posts: this.store.findAll('post')
    });
  },
  previewPost(post){
    preview = []
    prep = post.content.split('');
    for (var i = 0; i == 25; i++){
      preview.push(prep[i]);
    }
    return preview.join('');
  },
  actions: {
    saveUser(params) {
      var newUser = this.store.createRecord('user', params);
      newUser.save();
      this.transitionTo('index');
    }
  }
});
