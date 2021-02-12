var isi = prompt('masukkan nama  anggota');

switch (isi) {
  case 'deri':
  case 'budi':
  case 'zul':
  case 'dono':
    alert('anggota terdaftar');
    break;

  default:
    alert('nama anggota tidak ada');
    break;
}