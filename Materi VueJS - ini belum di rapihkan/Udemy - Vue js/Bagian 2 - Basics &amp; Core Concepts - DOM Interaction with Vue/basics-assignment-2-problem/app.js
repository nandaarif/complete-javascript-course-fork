const app = Vue.createApp({
    data() {
        return {
            contohSatu: '',
            contohDua: ''
        };
    },
    methods: {
        cobaSatu() {
            alert('Contoh Satu !');
        },
        cobaDua(event) {
            this.contohSatu = event.target.value;
        },
        cobaTiga(){
            this.contohDua = this.contohSatu;
        }
    }
});

app.mount('#assignment')