var Bindings = Ember.Application.create({ rootElement: '#bindings' });

Bindings.president = Ember.Object.create({
  name: "Barack Obama"
});

Bindings.country = Ember.Object.create({
  // Ending a property with 'Binding' tells Ember.js to
  // create a binding to the presidentName property.
  presidentNameBinding: 'Bindings.president.name'
});

Bindings.country.get('presidentName');
// "Barack Obama"

