const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    outputFullname() {
      // dibawah ini mengecek apakah this.name kosong sebelumnya mengembalikan nilai. Jika kosong, kembalikan ''
      console.log('Selamat datang di coba-coba')
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Yakaro';
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name = '';
    }
  }
});

app.mount('#events');
