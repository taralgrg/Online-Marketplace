import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(product, params) {
      this.sendAction('update', product, params);
    },
    delete(product) {
      if (confirm('Are you sure you want to delete this posting?')) {
        this.sendAction('destroyProduct', product);
      }
    }
  }
});
