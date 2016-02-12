import DS from 'ember-data';

export default DS.Model.extend({
  line_items:      DS.hasMany({async: true}),
  cashbox:         DS.belongsTo({async: true}),
  name:            DS.attr('string'),
  opened_at:       DS.attr('date'),
  closed_at:       DS.attr('date'),
  opening_balance: DS.attr('number'),
  total:           DS.attr('number')
});
