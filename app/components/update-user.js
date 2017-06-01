import Ember from 'ember';

export default Ember.Component.extend({
  updateUser: false,
  actions: {
    updateUserFormShow() {
      this.set('updateUser', true);
    },

    update(user) {
      var params = {
        name: this.get('name'),
        bio: this.get('bio'),
        img: this.get('img'),
      };
      this.set('updateUser', false);
      this.sendAction('update', user, params)
    }
  }
});;
