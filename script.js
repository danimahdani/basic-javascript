// if (5 > 4) {
//   console.log('5 lebih dari 4');
// }

// var x = 10;
// var y = 4;

// if (x <= y) {
//   console.log('nilai', x, 'kurang dari atau sama dengan nilai', y);
// } else {
//   console.log('pernyataan di atas bernilai false');
// }

// (x <= y) ? console.log('nilai', x, 'kurang dari atau sama dengan nilai', y) : console.log('pernyataan di atas bernilai false');
// var user = confirm('apa kamu yakin ?');
// (user === true) ? alert('user menekan tombol OK') : alert('user menekan tombol CANCEL');

// alert('selamat datang');
// var user = true;

// while (user === true) {
//   var nama = prompt('masukkan nama anda : ');
//   alert('halo nama saya ' + nama);

//   user = confirm('coba lagi ?');
// }

// alert('terima kasih');


// alert('kalkulator sederhana');
// var angka1 = prompt('masukkan angka pertama anda :');
// var angka2 = prompt('masukkan angka kedua anda :');

// var hasil = Number(angka1) + Number(angka2);

// alert('hasil penjumlahan ' + hasil);

// alert('mulai !');
// for (var i = 0; i < 5; i++) {
//   alert('hello world');
// }
// alert('habis');

// var angka = prompt('masukkan angka :');
// (angka % 2 === 0) ? alert('hasil nya adalah ganjil') : alert('hasilnya genap');

// var user = true;
// while (user) {
//   var user = Number(prompt('masukkan nomor id:'));
//   if (user === 1) {
//     alert('admin level 1');
//   } else if (user === 2) {
//     alert('admin level 2');
//   } else if (user === 3) {
//     alert('user biasa');
//   } else {
//     alert('nomor id tidak ada');
//   }
//   user = confirm('coba lagi ?');
// }
// alert('terima kasih');

// (0.34 >= 0.34) ? console.log(true) : console.log(false);

// alert('bermain tebak angka');
// var jmlMain = 3;

// while (jmlMain >= 1) {
//   let player = prompt('masukkan angka anda 1 - 10 : ');
//   const comp = Math.floor(Math.random() * 10);
//   if (player == comp) {
//     alert('tebakan anda benar');
//     break;
//   } else {
//     alert('tebakan anda salah');
//   }
//   jmlMain--;
// }
// alert('terima kasih');

// var test = Math.ceil(Math.random() * 10);
// console.log(test);


// alert("Bermain Tebak-Tebakan Angka")
// let chance = 3;
// while (chance >= 1) {
//   let p = prompt("masukan Angka mulai Dari 1-10");
//   var bot = Math.floor(Math.random() * 10) + 1
//   if (p == bot) {
//     alert("Tebakan Anda Benar")
//     break;
//   } else {
//     alert("tebakan anda salah")
//   }
//   chance--;
// }


var kesempatan = 3;

//apakah nilai kesempatan lebih besar dari pada nilai 1
while (kesempatan >= 1) {
  //jika true maka blok while akan memberika outputnya berupa alert
  alert('anda mempunyai ' + kesempatan + ' x');
  //setelah alert di eksekusi variabel akan di kurangi oleh decrement -1
  //dan mengulang kembali while
  //jadi 3-1 = 2 dan seterusnya
  // catatan penting !
  // increment adalah penambahan +1
  // decrement adalah pengurangan -1
  kesempatan--;
}