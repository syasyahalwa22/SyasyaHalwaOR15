function ambilDataBuku() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ judul: "Bumi Manusia", penulis: "Pramoedya Ananta Toer"});
        }, 1500);
    });
}

// Menggunakan async/await
async function tampilkanBuku() {
    console.log("Mengambil data buku...");
    const buku = await ambilDataBuku(); // Tunggu sampai promise selesai
    console.log("Judul  :", buku.judul);
    console.log("Penulis:", buku.penulis);
}

tampilkanBuku();

