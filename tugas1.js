// Tipe data primitif 
const judul = "Laskar Pelangi"; 
const penulis = "Andrea Hirata"; 
const tahun = 2005; 
const harga = 75000; 
const tersedia = true; 
 
console.log(`Judul    : ${judul}`); 
console.log(`Penulis  : ${penulis}`); 
console.log(`Tahun    : ${tahun}`); 
console.log(`Harga    : Rp ${harga}`); 
console.log(`Tersedia : ${tersedia}`); 

let buku = { 
  id: 1, 
  judul: "Bumi Manusia", 
  penulis: "Pramoedya Ananta Toer", 
  harga: 95000, 
  detail: { 
    tahun: 1980, 
    halaman: 535 
  } 
}; 
 
// Mengakses properti object 
console.log(buku.judul);          // Bumi Manusia 
console.log(buku["penulis"]);     // Pramoedya Ananta Toer 
console.log(buku.detail.tahun);   // 1980 

let hargaBuku = 75000; 
let jumlah = 3; 
 
console.log(hargaBuku + jumlah);   // 75003 
console.log(hargaBuku * jumlah);   // 225000 (total harga) 
console.log(hargaBuku - 5000);     // 70000 (setelah potongan) 
console.log(hargaBuku / 2);        // 37500 (harga setengah) 
console.log(hargaBuku % 2);        // 0 (sisa bagi) 

let stok = 5; 
 
if (stok > 10) { 
  console.log("Stok aman"); 
} else if (stok > 0) { 
  console.log("Stok menipis"); 
} else { 
  console.log("Stok habis"); 
} 
 
// Ternary operator 
let status = (stok > 0) ? "Tersedia" : "Habis"; 
console.log(status); // "Tersedia" 

let daftarBuku = ["Laskar Pelangi", "Bumi Manusia", "Sang Pemimpi"]; 
 
// For loop 
for (let i = 0; i < daftarBuku.length; i++) { 
  console.log(`${i + 1}. ${daftarBuku[i]}`); 
} 
 
// For...of loop 
for (let buku of daftarBuku) { 
  console.log(buku); 
}

// Function declaration 
function detailBuku(judul, penulis) { 
  return `${judul} oleh ${penulis}`; 
} 
console.log(detailBuku("Laskar Pelangi", "Andrea Hirata")); 
 
// Arrow function 
const hitungTotal = (hargaBuku, jumlah) => hargaBuku * jumlah; 
console.log(hitungTotal(75000, 3)); // 225000 
 
// Default parameter 
function infoBuku(judul = "Tidak diketahui") { 
  return `Buku: ${judul}`; 
} 
console.log(infoBuku());                 // Buku: Tidak diketahui 
console.log(infoBuku("Sang Pemimpi"));   // Buku: Sang Pemimpi 

function prosesData(judul, callback) { 
  console.log(`Memproses buku "${judul}"...`); 
  const hasil = judul.toUpperCase(); 
  callback(hasil); 
} 
 
prosesData("Laskar Pelangi", function(hasil) { 
  console.log("Hasil:", hasil); // Hasil: LASKAR PELANGI 
}); 
 
// Callback dalam operasi asynchronous 
setTimeout(function() { 
  console.log("Data buku berhasil dimuat setelah 2 detik"); 
}, 2000); 
 
function ambilDataBuku() { 
  return new Promise((resolve, reject) => { 
    setTimeout(() => { 
      const berhasil = true; // ubah ke false untuk simulasi gagal 
 
      if (berhasil) { 
        resolve({ judul: "Laskar Pelangi", penulis: "Andrea Hirata" }); 
      } else { 
        reject("Gagal mengambil data buku"); 
      } 
    }, 1500); 
  }); 
} 

ambilDataBuku() 
  .then((buku) => { 
    console.log("Data buku:", buku); 
  }) 
  .catch((error) => { 
    console.error("Error:", error); 
  }); 
 
  function ambilDataBuku() { 
  return new Promise((resolve) => { 
    setTimeout(() => { 
      resolve({ judul: "Bumi Manusia", penulis: "Pramoedya Ananta Toer" 
}); 
    }, 1500); 
  }); 
} 
 
async function tampilkanDataBuku() { 
  console.log("Mengambil data buku..."); 
  const buku = await ambilDataBuku(); 
  console.log("Data buku:", buku); 
} 
 
tampilkanDataBuku(); 

const readline = require("readline"); 

// Array penyimpanan data buku sementara 
let daftarDataBuku = []; 

function tampilkanBuku() { 
  console.log("\n===== DAFTAR BUKU ====="); 
  if (daftarDataBuku.length === 0) { 
    console.log("Belum ada buku."); 
  } else { 
    daftarDataBuku.forEach((buku) => { 
      console.log(`${buku.id}. ${buku.judul}`); 
    }); 
  } 
  console.log("=======================\n"); 
}

// Membuat interface untuk input/output terminal 
const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout 
}); 

// Fungsi menambah buku 
function tambahBuku(judul) { 
  const buku = { 
    id: daftarDataBuku.length + 1, 
    judul: judul 
  }; 
  daftarDataBuku.push(buku); 
  console.log(`Buku "${judul}" berhasil ditambahkan.`); 
} 
 
// Fungsi simulasi mengambil data buku (async) 
function ambilDataBuku() { 
  return new Promise((resolve) => { 
    setTimeout(() => { 
      resolve("Data awal berhasil dimuat dari server."); 
    }, 1500); 
  }); 
} 
 
// Fungsi utama dengan input dari terminal 
async function main() { 
  console.log("===== APLIKASI MANAJEMEN BUKU ====="); 
 
  // Simulasi memuat data awal (async) 
  const pesan = await ambilDataBuku(); 
  console.log(pesan); 
 
  // Meminta input judul buku dari user 
  rl.question("Masukkan judul buku: ", (judul) => { 
    tambahBuku(judul); 
    tampilkanBuku(); 
    rl.close(); // tutup interface setelah selesai 
  }); 
} 
 
main(); 