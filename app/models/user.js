import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  bio: DS.attr(),
  img: DS.attr(),
  // posts: DS.hasMany('post', {async: true})
});
