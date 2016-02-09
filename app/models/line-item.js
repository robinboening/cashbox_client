import DS from 'ember-data';

export default DS.Model.extend({
  book:        DS.belongsTo(),
  receipt_url: DS.attr('string'),
  charged_at:  DS.attr('date'),
  amount:      DS.attr('number')
});
