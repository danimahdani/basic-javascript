//Cara membuat object pada javascript terbaru
//1.Object Literal
//Noted : tidak efektif untuk object yang banyak
// let player = {
//   name: 'Mahdani',
//   health: 100,
//   dps: function (dpsIn) {
//     this.health -= dpsIn;
//     console.log(`Halo player ${this.name}, Total HP kamu sekarang adalah ${this.health}`);
//   }
// }

//2. Function declaration
// const methodPlayer = {
//   dpsIn: function (dpsIn) {
//     this.health -= dpsIn;
//     console.log(`Halo player ${this.name}, kamu kena DPS bos, sekarang HP mu ${this.health}`);
//   },

//   healing: function (healing) {
//     this.health += healing;
//     console.log(`Player ${this.name}, mendapatkan healing support dari ${this.suppportName}, sekarang HP mu ${this.health}`);
//   }
// }


// function Player(name, health, suppportName) {
//   //fungsi dari object.create disini untuk membaca object parent(diatas) secara otomatis dan langsung masuk
//   //menjadi object
//   let player = Object.create(methodPlayer);
//   player.name = name;
//   player.health = health;
//   player.suppportName = suppportName;

//   return player;
// }

// let mahdani = Player('Mahdani', 100, 'Rezki');
// let rezki = Player('Rezki', 100, 'Rezki');


//3. Function Constructor
//keyword new
// function Player(name, health) {
//   this.name = name;
//   this.health = health;

//   this.dpsIn = function (dpsIn) {
//     this.health -= dpsIn;
//     console.log(`Player bernama ${this.name}, mendapatkan serangan damage dan HP sekarang ${this.health}`);
//   }
// }

// let player1 = new Player('Mahdani', 100);


//Prototype
// function Player(name, health) {
//   // let player = Object.create(methodPlayer);
//   this.name = name;
//   this.health = health;
//   // player.suppportName = suppportName;

//   // return player;
// }

// Player.prototype.dpsIn = function (dpsIn) {
//   this.health -= dpsIn;
//   return `Halo Player ${this.name}, HP kamu berkurang ${this.health}`;
// }

// let player1 = new Player('Mahdani', 100);


//menggunakan class

class Player {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }

  dpsIn(dpsIn) {
    this.health -= dpsIn;
    if (this.health <= 0) {
      this.health = 0;
      return `Player ${this.name} kamu mati sekarang HP mu ${this.health}`;
    }
    return `Halo Player ${this.name}, HP kamu berkurang ${this.health}`;

  }

  healing(healing) {
    this.health += healing;
    if (this.health > 100) {
      this.health = 100;
      return `HP kamu sudah full, tidak bisa bertambah lagi`;
    }
    return `Halo Player ${this.name}, HP kamu bertambah ${this.health}`;
  }
}

let player1 = new Player('Mahdani', 100);
let player2 = new Player('Eko', 90);