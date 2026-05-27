let buku = {
    id: 1,
    judul: "Bumi Manusia",
    penulis: "Pramoedya Ananta Toer",
    harga: 95000,
    detail: {
        tahun: 1980,
        halaman: 535
    }
}
// Mengakses properti objek
console.log(buku.judul);            // Bumi Manusia
console.log(buku["penulis"]);       // Pramoedya Ananta Toer
console.log(buku.detail.tahun);     // 1980
console.log(buku.detail.halaman);   // 535