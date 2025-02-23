const app = Vue.createApp({
    data() {
        return {
            cobaSatu: 'Lihat Yaaa',
            vueLink: 'https://vuejs.org/'
        };
    },
    // methods memungkinkan anda untuk menentukan fungsi yang harus dijalankan, ketika sesuatu terjadi 
    methods: {
        cobainSatu() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return 'Selamat datang!!'
            } else {
                return 'asdqdqwqwdqwdqdq!!'
            }
        }
    }
});

app.mount('#user-goal');