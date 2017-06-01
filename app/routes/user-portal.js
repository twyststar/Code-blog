import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log("in the route model, user id - hopefully: " + params.user_id);
    return this.store.findRecord('user', params.user_id);
  },
  actions: {
    savePost(params) {
      console.log("in the route " + params);
      var newPost = this.store.createRecord('post', params);
      var user = params.user;
      user.get('posts').addObject(newPost);
      newPost.save().then(function() {
        return user.save();
      });
      this.transitionTo('index');
    },
  }
});
