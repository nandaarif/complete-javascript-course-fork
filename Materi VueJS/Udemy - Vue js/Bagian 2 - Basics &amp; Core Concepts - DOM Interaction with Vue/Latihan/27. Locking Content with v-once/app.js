const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },  
    submitForm() {
      // prevent untuk mencegah default dari browser
      // event.preventDefault();
      alert('cqqwdwdjqbuqwdguqwrguqwrguirqw');
    },
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
