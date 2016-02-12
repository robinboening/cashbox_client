import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createCashbox: function(model) {
      this.sendAction('createCashbox', this);
      this.set('name', '');
    }
  }
});

