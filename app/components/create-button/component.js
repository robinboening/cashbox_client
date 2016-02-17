import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    show: function(form) {
      this.get('router').transitionTo(form);
    }
  }
});
