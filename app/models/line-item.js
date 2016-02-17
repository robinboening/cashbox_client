import DS from 'ember-data';

export default DS.Model.extend({
  book:        DS.belongsTo(),
  matter:      DS.attr('string'),
  receipt_url: DS.attr('string'),
  charged_at:  DS.attr('date'),
  amount:      DS.attr('number'),

  isPositive: Ember.computed('amount', function() {
    if(this.get('amount') > 0) {
      return true
    }
    else {
      return false;
    }
  })
});
