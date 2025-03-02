function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// let currentRound = 0;

const app = Vue.createApp({
  data(){
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      logMessages: []
    };
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: '0%' }
      }
      return{ width: this.monsterHealth + '%' }
    },
    playerBarStyles() {
      if (this.playerHealth < 0) {
        return { width: '0%' }
      }
      return { width: this.playerHealth + '%' }
    },
    // this : karena kita berada dalam contoh tampilan.
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0
    }
  },
  watch: {
    playerHealth(value) {
      // Kesehatan pemain lebih kecil dari atau sama dengan nol. Dan jika dikatakan kesehatan monster juga lebih kecil atau sama dengan nol.
      if (value <= 0 && this.monsterHealth <= 0) {
        // A draw
        // Jika nilainya lebih kecil atau sama dengan nol.
        this.winner = 'draw';
      } else if (value <= 0) {
        // player lost
        // Kemudian kita tahu pemain kalah.
        // jika player kalah maka monster menang
        this.winner = 'monster';
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        // A draw
        this.winner = 'draw'; 
      } else if (value <= 0) {
        // Monster lost
        this.winner = 'player';
      }
    }
  },
  methods: {
    startGame(){
      this.playerHealth = 100;
      this.monsterHealth = 100;
      // winner null karena tidak memiliki pemenang
      this.winner = null;
      this.currentRound = 0;
      this.logMessages = [];
    },
    attackMonster(){
      // const attackValue = Math.floor(Math.random() * (15 - 5)) + 5;
      // this.monsterHealth = this.monsterHealth - attackValue;
      this.currentRound++;
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.addLogMessage('player', 'attack', attackValue);
      this.attackPlayer();
    },
    // monster bisa menyerang balik (Pemain Penyerang)
    attackPlayer(){
      // 15 itu maksimal 5 itu minimal
      // const attackValue = Math.floor(Math.random() * (15 - 8)) + 8;
      // this.playerHealth = this.playerHealth - attackValue;
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
      this.addLogMessage('monster', 'attack', attackValue);
    },
    specialAttackMonster(){
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.addLogMessage('player', 'attack', attackValue);
      this.attackPlayer();
    },
    healPlayer(){
      this.currentRound++;
      const healValue = getRandomValue(8, 20);
      if (this.playerHealth + healValue > 100) {
        // Maka saya ingin mengatur kesehatan pemain menjadi 100 sehingga. Kita tidak bisa lebih tinggi dari itu.
        this.playerHealth = 100;
      } else {
        // Jika kesehatan kita saat ini ditambah nilai penyembuhan yang dihitung tidak melebihi 100. Baru kemudian saya ingin menambahkan nilai penyembuhan penuh kesehatan.
        this.playerHealth += healValue;
      }
      this.addLogMessage('player', 'heal', healValue);
      this.attackPlayer();
    },
    surrender(){
      this.winner = 'monster';
    },
    // mengambil 3 parameter
    // itu harus mengambil informasi, siapa yang melakukan sesuatu.
    addLogMessage(who, what, value){
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value
      });
    }
  },
});

app.mount('#game');