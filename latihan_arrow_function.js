// const profile = (nama) => {
//   return `Halo nama saya ${nama}`;
// }

// console.log(profile('Mahdani'));

//menggunakan 1 parameter bisa menghilangkan tanda kurung parameter
// const profile = nama => `Halo nama saya ${nama}`;
// console.log(profile('Mahdani'));

// memakai 2 parameter memakai tanda kurung
// const profile = (nama, umur) => `Nama saya ${nama} dan umur saya ${umur}`;
// console.log(profile('Mahdani', 24));

//latihan membuat maping pada object
let namaBlok = ['Blok Anggrek', 'Blok Mawar', 'Blok Melati'];

// let hitungHuruf = namaBlok.map(nama => ({ nama: nama, jmlhHuruf: nama.length }));
// console.table(hitungHuruf);

let hitungHuruf = namaBlok.map(function (nama) {
  this.nama = nama,
    this.jmlhHuruf = nama.length;
})
console.table(hitungHuruf);