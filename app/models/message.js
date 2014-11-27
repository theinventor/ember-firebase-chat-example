import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr(),
  timestamp: DS.attr('date')
});
