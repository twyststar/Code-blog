import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      users: this.store.findAll('user'),
      posts: this.store.findAll('post')
    });
  },
  actions: {
    savePost3(params) {
      var newPost = this.store.createRecord('post', params);
      var user = params.user;
      user.get('posts').addObject(newPost);
      newPost.save().then(function() {
        return user.save();
      });
      this.transitionTo('index');
    },
    saveUser3(params) {
      var newUser = this.store.createRecord('user', params);
      newUser.save();
      this.transitionTo('index');
    },
  },
});
