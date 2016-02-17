import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  actions: {
    createCashbox: function(model) {
      this.sendAction('createCashbox', this);
    }
  }
});

