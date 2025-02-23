const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    confirmInput(){
      this.confirmedName = this.name;
    },
    submitForm(event){
      // event.preventDefault adalah tindakan default milik acara tersebut tidak akan terjadi.
      // event.preventDefault();
      alert('COBAIN');
    },
    setName(event ,lastName){
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter --;
    }
  }
});

app.mount('#events');

