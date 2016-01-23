import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:3000',

  pathForType: function(type) {
    let underscored = Ember.String.underscore(type);
    return Ember.String.pluralize(underscored);
  }
});
