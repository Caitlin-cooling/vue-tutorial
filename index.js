var app = new Vue({
  el: '#app',
  data: {
    message: '',
    seen: true,
    todos: [
      { text: 'One thing'},
      { text: 'Another thing' },
      { text: 'And another' }
    ],
    groceryList: [
      { id:0, text: 'Apples' },
      { id:1, text: 'Milk' },
      { id:2, text: 'Eggs' }
    ]
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
});

app.todos.push({ text: 'Added another thing!' })

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
