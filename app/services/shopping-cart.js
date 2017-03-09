import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  subTotal: 0,
  add(item) {
    this.get('items').pushObject(item);
    // var total = this.get('subTotal');
    this.set('subTotal', parseInt(item.get('price'))+parseInt(this.get('subTotal')));
  }
});
