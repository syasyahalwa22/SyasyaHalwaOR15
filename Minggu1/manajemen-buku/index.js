// Impor modul readline bawaan Node.js untuk menangani input dari terminal
const { release } = require("os");
const readline = require("readline");

// Buat interface untuk membaca input dan menulis output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Array sebagai penyimpanan data buku sementara
let daftarBuku = [];

// Fungsi menambah buku ke dalam daftar
function tambahBuku(judul, penulis) {
    const buku = {
        id: daftarBuku.length + 1,
        judul: judul,
        penulis: penulis
    };
    daftarBuku.push(buku);
    console.log(`\nBuku "${judul}" berhasil ditambahkan.`);
}

// Fungsi menampilkan semua buku
function tampilkanBuku() {
    console.log("\n===== DAFTAR BUKU =====");
    if (daftarBuku.length === 0) {
        console.log("Belum ada buku dalam daftar.");
    } else {
        daftarBuku.forEach((buku) => {
        console.log(`${buku.id}. ${buku.judul} - ${buku.penulis}`);
        });
    }
    console.log("=======================");
}

// Fungsi mencari buku berdasarkan judul
function cariBuku(judul) {
    let ditemukan = false;
    for (let i = 0; i < daftarBuku.length; i++) {
        if (daftarBuku[i].judul === judul) {
            console.log("\n===== HASIL PENCARIAN =====");
            console.log(`${daftarBuku[i].id}. ${daftarBuku[i].judul} - ${daftarBuku[i].penulis}`);
            ditemukan = true;
        }
    }

    if (ditemukan === false) {
        console.log("Buku tidak ditemukan.");
    }
}

// Fungsi simulasi mengambil data buku dari server (async)
function ambilDataBuku() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data berhasil dimuat dari server.");
        }, 1500);
    });
}

// Fungsi utama untuk menjalankan aplikasi
async function main() {
    console.log("===== APLIKASI MANAJEMEN BUKU =====");
    // Simulasi memuat data awal menggunakan async/await
    const pesan = await ambilDataBuku();
    console.log(pesan);

     // Input buku pertama
     rl.question("\nMasukkan judul buku pertama: ", (judul1) => {
        
        // Validasi judul kosong
        if (judul1 === "") {
            console.log("Judul buku tidak boleh kosong.");
            rl.close();
        } else {
            rl.question("Masukkan nama penulis: ", (penulis1) => {
                tambahBuku(judul1, penulis1);

                // Input buku kedua
                rl.question("\nMasukkan judul buku kedua: ", (judul2) => {
                    
                    // Validasi judul kosong
                    if (judul2 === "") {
                        console.log("Judul buku tidak boleh kosong.");
                        rl.close();
                    } else {
                        rl.question("Masukkan nama penulis: ", (penulis2) => {
                            tambahBuku(judul2, penulis2);
                            tampilkanBuku();

                             // Mencari buku berdasarkan judul
                             rl.question("\nCari judul buku: ", (cariJudul) => {
                                cariBuku(cariJudul);
                                rl.close();
                            });
                        });
                    }
                });
            });
        }
    });
}
                            

// Jalankan aplikasi
main();