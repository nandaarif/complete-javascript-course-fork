function getRandomNumber() {
    return Math.random();
}

const app = Vue.createApp({
    data() {
        return {
            tugas1: "Nanda Arif I",
            tugas2: "24",
            umur: 24,
            umurBaru: 0,
            favoriteNumber: getRandomNumber(),
            imageUrl: 'https://storage.jakarta-tourism.go.id/public/images/article/8437415341664213099.jpg',
            name: 'Nanda Arif'
        };
    },
    created() {
        this.umurBaru = this.umur + 5;
    }
});

app.mount('#assignment');