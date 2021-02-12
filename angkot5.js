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
for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    //menggunakan OR ( || ) semuanya bernilai true
  } else if (noAngkot === 8 || noAngkot === 10) {
    console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
  } else {
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
  }
}