import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createCashbox: function(model) {
      var _this = this;

      let cashbox = _this.store.createRecord('cashbox', {
        name: model.name
      });
      cashbox.save().then(function() {
        _this.transitionTo('cashboxes.index');
      });
    }
  }
});
