const app = Vue.createApp({
    data() {
        return {
            // result: 0
            number: 0
        };
    },
    computed: {
        result() {
            if (this.number < 37) {
                return 'Not there yet !';
            } else if (this.number === 37) {
                return this.number;
            } else {
                return 'Too much !';
            }
        }
    },
    watch: {
        result() {
            console.log('Watcher executing....');
            const that = this;
            setTimeout(function() {
                that.number = 0;
            },5000)
        }
    },
    methods: {
        addNumber(num) {
            this.number = this.number + num
        }

        // step 1
        // addFive() {
        //     this.result += 5;
        //     this.resetResultAfterFiveSeconds();
        // },
        // addOne() {
        //     this.result += 1;
        //     this.resetResultAfterFiveSeconds();
        // },
        // resetResultAfterFiveSeconds() {
        //     setTimeout(() => {
        //         this.result = 0;
        //     }, 5000);
        // }
    }
});

app.mount('#assignment')