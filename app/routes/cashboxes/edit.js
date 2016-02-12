import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('cashbox', params.cashbox_id);
  },

  actions: {
    updateName: function(name, model) {
      model = model.get('cashbox');
      var _this = this;
      _this.store.findRecord('cashbox', model.id).then(function(cashbox) {
        cashbox.set('name', name);
        cashbox.save();
        _this.transitionTo('cashboxes.show', model);
      });
    },
    destroyCashbox: function(model) {
      var _this = this;
      _this.store.findRecord('cashbox', model.id).then(function(cashbox) {
        cashbox.destroyRecord().then(function() {
          _this.transitionTo('cashboxes.index');
        });
      });
    }
  }
});
