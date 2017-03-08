import DS from 'ember-data';

export default DS.Model.extend({
  model: DS.attr(),
  price: DS.attr(),
  image: DS.attr()
});
