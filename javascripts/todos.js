var Todos = Ember.Application.create({ rootElement: '#todos' });

Todos.Todo = Ember.Object.extend({
  title: null,
  complete: false
});

Todos.todosController = Ember.ArrayProxy.create({
  content: [],

  createTodo: function() {
    var title = $('#new-todo').val();
    var todo = Todos.Todo.create({ title: title, complete: false });
    this.get('content').pushObject(todo);
    $('#new-todo').val('');
  },

  clearCompleted: function() {
    var todos = this.get('content');
    for ( var i = 0; i < todos.length; i += 1 ) {
      if ( todos[i].get('complete') ) {
        this.removeObject(todos[i]);
      }
    }
  }
});

Todos.TextField = Ember.TextField.extend({
  insertNewline: function() {
    Todos.todosController.createTodo();
  }
});