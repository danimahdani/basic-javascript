// var hari = ['Senin', 'Selasa', 'Rabu'];
// alert(hari[1]);

//index javascript dimulai dari anggka 0
//mengisi index array pada javascript bisa menggunakan tipe data berbeda dan campuran
//seperti string,booelan,integer secara bersamaan dalam satu variabel


// var hari = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum\'at', 'Sabtu', 'Minggu'];
//Menghapus array dari array terakhir menggunakan method pop();
//Menggunakan pop untuk menghapus 2 array harus mengulangi penulisan array dan method pop
//contoh
// hari.pop();
// hari.pop();
// hari.pop();
// console.log(hari.join('\n'));


// var hari = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum\'at', 'Sabtu', 'Minggu'];
//Menambahkan array dari array terkahir menggunakan method push();
//penggunaan push sendiri bisa diisi lebih dari satu
//contohnya di bawah ini
// hari.push('Kamis', 'Jumat');

//Menambahkan array mulai dari depan menggunakan unshift
//sama seperti push, bisa menambahkan lebih dari satu index
// hari.unshift('Minggu', true);

//Menghapus array terdepan menggunakan shift
//penggunaannya sama seperti pop();
// hari.shift();

//Menambahkan dari tengah array menggunakan splice
//splice disini menambahakan array dari index yang ingin kita tambahakan
//array yang akan di tambahkan berada didpan array yang kita pilih melalui splice
//penulisan splice sendiri ada beberapa syarat
//namaVariabel.splice(indexAwalYangAkanDitambah, mauDihapusIndexKeBerapa(inioptional), arrayBaru(array baru disini bisa lebih dari satu));
//catatan penting saat memerlukan indexHapus
//indexhapus disini tergantung index berapa yang di isi pada slice
//misal pada contoh ini kita ingin menghilangkan terlebih dahulu 2 index maka 2 index itu akan hilang
//contoh mengilangkan 2 index dan menambahkannya
// hari.splice(1, 2, 'Hello', 'World');
//contoh penambahan splice dibawah ini
// hari.splice(2, 0, 'Hello World', true);


//memotong array yang ingin kita ambil menggunaka slice
//contoh penggunaan slice
// var day = hari.slice(1, 4);
// console.log(day.join(' - '));


// console.log(hari.join(' - '));
//fungsi dari join disini untuk memberikan pembatas pada array yang akan di tampilkan
//default dari array yang di tampilkan berupa koma dibawah tulisan


// var hari = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum\'at', 'Sabtu', 'Minggu'];
// var acak = [1, true, 'Hello', false, 'World'];

//untuk menampilkan elemen dan array menggunakan function
//yang pertama ditampilkan oleh function itu adalah elemen dari index tersebut seperti function (e)
//untuk menampilkan elemen dan nomor urut indexnya menggunakan 2 parameter function (e, i) e untuk elemen, i untuk index ke


//cara baca forEach disini
//untuk setiap (forEach) elemen dari pada array hari lakukan fungsi berikut ini
// hari.forEach(function (e) {
//   console.log(e);
// });

// acak.forEach(function (isi, nomor) {
//   console.log('Nomor urut index ke ' + nomor + ' yang berisi adalah ' + isi);
// });

// acak.forEach(function (elemen, index) {
//   console.log(typeof (elemen), 'nama elemen = ' + elemen, typeof (index), 'nomor index ke-' + index);
// });

//map
//berbeda dengan forEach, map mengembalikan array
var angka = [2, 5, 6, 10, 13, 15];
var angka2 = angka.map(function (e) {
  return e * 2;
});

console.log(angka2.join(' - '));


//sort
// mengurutkan angka
// var angka = [2, 5, 6, 10, 13, 15];
// angka.sort(function (a, b) {
//   return a - b;
// });
// console.log(angka.join(' - '));

// var hari = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum\'at', 'Sabtu', 'Minggu'];
// hari.sort();
// console.log(hari.join('\n'));


// find & fillter
// var angka = [1, 4, 2, 6, 8, 20];
// var cari = angka.filter(function (e) {
//   return e < 5;
// });
// console.log(cari.join(' - '));

// cari.sort(function (a, b) {
//   return a - b;
// })
// console.log(cari.join(' - '));

// var kali = cari.map(function (e) {
//   return e * 2;
// })
// console.log(kali.join(' - '));

// var angka = [1, 4, 2, 6, 8, 20];
// var angka2 = angka.find(function (e) {
//   return e > 10;
// })
// console.log(angka2);