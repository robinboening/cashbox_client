import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('cashbox');
  },

  actions: {
    createCashbox: function(model) {
      let cashbox = this.store.createRecord('cashbox', {
        name: model.name
      });
      cashbox.save();
    }
  }
});
