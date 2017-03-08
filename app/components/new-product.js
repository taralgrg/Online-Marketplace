import Ember from 'ember';

export default Ember.Component.extend({
  addNewProduct: false,
  actions: {
    productFormShow() {
      this.set('addNewProduct', true);
    },
    saveProduct1() {
        var params = {
          model: this.get('model'),
          price: this.get('price'),
          image: this.get('image'),
        };
        this.set('addNewProduct', false);
        this.sendAction('saveProduct2', params);
      }
    }
  });
