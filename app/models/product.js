import DS from 'ember-data';

export default DS.Model.extend({
  model: DS.attr(),
  price: DS.attr(),
  currency: DS.attr('string',{defaultValue:"HKD"}), 
  image: DS.attr()
});
