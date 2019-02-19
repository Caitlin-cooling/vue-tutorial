var app = new Vue({
  el: '#app',
  data: {
    message: '',
    seen: true,
    todos: [
      { text: 'One thing'},
      { text: 'Another thing' },
      { text: 'And another' }
    ]
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
});

app.todos.push({ text: 'Added another thing!' })
