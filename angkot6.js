var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

// for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
//   if (noAngkot <= angkotBeroperasi) {
//     console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
//   } else if (noAngkot === 8 ) {
//     console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
//   } else if (noAngkot === 10) {
//     console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
//   } else {
//     console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
//   }
// }

//Efektif
// for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
//   if (noAngkot === 5 ||noAngkot === 8 || noAngkot === 10) {
//     console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
//   } else if (noAngkot <= angkotBeroperasi) {
//     console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
//   } else {
//     console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
//   }
// }


//Efektif latihan angkot6
for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
  //Menggunakan operator logika ( && ) semuanya harus bernilai true
  //jika salah satu saja bernilai false, nilai yg akan di kembalikan false
  //contoh di bawah ini noAngkot !== 5 bernilai false maka dia akan keluar dari blok if pertama
  //dan masuk ke blok if ke 2 ( blok else if ) dan mencar nilai 5 yg bernilai true
  if (noAngkot <= angkotBeroperasi && noAngkot !== 5) {
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
  } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
    console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
  } else {
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
  }
}