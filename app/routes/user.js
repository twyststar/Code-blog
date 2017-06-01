import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log("let's find some posts: " + params.posts);
    return this.store.findRecord('user', params.user_id);
  },
  actions: {

    savePost(params) {
      console.log('inside the save user.js');
      var newPost = this.store.createRecord('post', params);
      var user = params.user;
      user.get('posts').addObject(newPost);
      newPost.save().then(function() {
        return user.save();
      });
      this.transitionTo('index');
    },

    saveUser(params) {
      var newUser = this.store.createRecord('user', params);
      newUser.save();
      this.transitionTo('index');
    },
  },
});
