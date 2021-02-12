var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  //jika angkot kosong
  if (penumpang.length == 0) {
    //tambahkan penumpang di awal array
    penumpang.push(namaPenumpang);
    //kembalikan isi array & keluar dari function
    return penumpang;
  } else {
    //telusuri kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      //jika kursi kosong
      if (penumpang[i] == undefined) {
        //tambah penumpang di kursi tersebut
        penumpang[i] = namaPenumpang;
        //kembalikan isi array & keluar dari function
        return penumpang;
      }
      //jika nama penumpang ada yang sama
      else if (penumpang[i] == namaPenumpang) {
        //tampilkan pesan sebagai berikut
        console.log(namaPenumpang + ' sudah ada di dalam angkot');
        //kembalikan nilai isi array dan keluar dari function
        return penumpang;
        //jika seluruh kursi terisi
      } else if (i == penumpang.length - 1) {
        //tambahkan penumpang di akhir array
        penumpang.push(namaPenumpang);
        //kembalikan isi array & keluar dari function
        return penumpang;
      }
    }
  }
}

var hapusPenumpang = function (namaPenumpang, penumpang) {
  //jika angkot kosong
  if (penumpang.length == 0) {
    //tampilkan pesan
    console.log('angkot masih kosong');
    //kembalikan nilai array
  } else {
    //cek penumpang apakah nama penumpang yang ingin turun itu ada
    for (var i = 0; i < penumpang.length; i++) {
      //jika nama penumpang itu ada
      if (penumpang[i] == namaPenumpang) {
        //maka ganti nama penumpang tersebut dengan undefined dan kursi tersebut kosong
        penumpang[i] = undefined;
        //kembalikan nilai array dan functionnya
        return penumpang;
        //jika ditelusuri sampai kursi terakhir nama penumpang tidak ada
      } else if (i == penumpang.length - 1) {
        //maka tampilkan pesan berikut
        console.log(namaPenumpang + ' tidak ada di dalam angkot');
        //kembalikan nilai array dan functionnnya
        return penumpang;
      }
    }
  }
  return penumpang;
}