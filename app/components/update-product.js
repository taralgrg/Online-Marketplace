import Ember from 'ember';

export default Ember.Component.extend({
  updateProductForm: false,
  actions: {
    updateProductForm() {
      this.set('updateProductForm', true);
    },
    update(product) {
      var params = {
        model: this.get('model'),
        price: this.get('price'),
        image: this.get('image'),
      };
      this.set('updateProductForm', false);
      this.sendAction('update', product, params);
    }
  }
});
