//cara membuat object (literal)
var profile = {
  nama: 'mahdani',
  umur: '24',
  lulusan: ['SD 157', 'SMP Negri 13', 'SMA Srijaya Negara'],
  alamat: {
    jalan: 'Jalan Mujahidin',
    noRumah: 365,
    kota: 'Palembang',
    kodePos: 30135,
  },
  pekerjaan: 'Ojek online'
}
console.log(profile.lulusan.push('testing'));
console.log(profile.lulusan);

//function declaration
// function buatObjectMahasiswa(nama, nim, email, jurusan) {
//   var mhs = {}
//   mhs.nama = nama;
//   mhs.nim = nim;
//   mhs.email = email;
//   mhs.jurusan = jurusan;
//   return mhs;
// }

// var mhs = buatObjectMahasiswa('mahdani', 151410216, 'mahdanidn@gmail.com', 'Sistem Informasi');


// constructor
// function Mahasiswa(nama, nim, email, jurusan) {
//   this.nama = nama;
//   this.nim = nim;
//   this.email = email;
//   this.jurusan = jurusan;
// }

// var mhs1 = new Mahasiswa('Mahdani', 151410216, 'mahdani@gmailcom', 'Sistem Informasi');