var ComputedProperties = Ember.Application.create({ rootElement: '#computed-properties' });

ComputedProperties.president = Ember.Object.create({
  firstName: 'Barack',
  lastName: 'Obama',

  fullName: function() {
    return [this.get('firstName'), this.get('lastName')].join(' ');
  }.property('firstName', 'lastName')
});