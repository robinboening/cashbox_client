import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateName: function(name) {
      this.sendAction('updateName', name, this);
    }
  }
});

