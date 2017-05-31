import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  content: DS.attr(),
  tag: DS.attr(),
  user: DS.belongsTo('user', {async: true})
});
