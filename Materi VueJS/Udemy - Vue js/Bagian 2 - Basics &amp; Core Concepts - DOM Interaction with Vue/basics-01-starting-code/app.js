// fungsi data adalah fungsi sebuah metode.
// fungsi methods adalah mengambil objek, yang penuh dengan metode, jadi fungsi

const app = Vue.createApp({
    data() {
        return {
            coba1: "Selamat datang di materi VueJS - DOM",
            coba2: "https://www.youtube.com/",
            coba3: "<h2> cobain dah </h2>"
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.4  ) {
                return 'selamat datang';
            } else {
                return 'hihihiihihi';
            }
        }
    }
});

app.mount('#user-goal');

// lanjutkan ke Tugas: Time to Practice: Data Binding 

