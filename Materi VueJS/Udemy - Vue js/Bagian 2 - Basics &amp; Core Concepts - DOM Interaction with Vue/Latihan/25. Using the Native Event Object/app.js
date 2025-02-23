const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    setName(event, firstName) {
        this.name = firstName + ' ' + event.target.value;
    },
    add(num) {
        this.counter = this.counter + num;
    },
    reduce(num) {
        this.counter = this.counter - num;
        // this.counter--;
    }
  }
});

app.mount('#events');
