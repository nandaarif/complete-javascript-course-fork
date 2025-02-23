const app = Vue.createApp({
    data() {
        return {
            cobaSatu: '<h2>Lihat Yaaa qwdqwdwdqqwd</h2>',
            cobaDua: 'Lihat Yaaaqwdqwdqwdqwd',
            vueLink: 'https://vuejs.org/'
        };
    },
    // methods memungkinkan anda untuk menentukan fungsi yang harus dijalankan, ketika sesuatu terjadi 
    methods: {
        cobainSatu() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.cobaDua
            } else {
                return this.cobaSatu
            }
        }
    }
});

app.mount('#user-goal');