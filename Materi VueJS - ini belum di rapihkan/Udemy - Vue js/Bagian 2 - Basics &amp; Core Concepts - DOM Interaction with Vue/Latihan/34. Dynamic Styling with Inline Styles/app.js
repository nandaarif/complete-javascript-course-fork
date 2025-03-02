const app = Vue.createApp({
  // reff digunakan untuk membuat variabel reaktif.
  // watch digunakan untuk memantau perubahan pada variabel reaktif.
  // methods :  digunakan untuk menangani peristiwa (event) atau melakukan logika perhitungan.
  // computed : Properti komputasi sering digunakan untuk menghitung nilai berdasarkan data yang ada atau menghitung hasil dari logika yang kompleks.
  // watch : Watcher sering digunakan untuk pemantauan perubahan data asynchronous atau ketika Anda perlu menangani kasus yang lebih kompleks yang tidak dapat ditangani oleh properti komputasi.

  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullName: ''
    };
  },
  watch: {
    counter(value) {
        if (value > 50) {
          const that = this;
          setTimeout(function(){
            that.counter = 0;
          }, 2000);
        } 
    }
    // name(value) {
    //   if (value === '') {
    //     this.fullName = '';
    //   } else {
    //     this.fullName = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === ''){
    //     this.fullName = '';
    //   } else {
    //     this.fullName = this.name + ' ' + value;
    //   }
    // },
  },
  computed: {
    fullName() {
      console.log('selamat datang coba-cobain');
      if (this.name === ' ' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    },
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
