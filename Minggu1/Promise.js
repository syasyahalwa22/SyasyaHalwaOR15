function ambilDataBuku() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const berhasil = false; // Coba ubah ke false untuk simulasi gagal
            if (berhasil) {
                resolve({ judul: "Laskar Pelangi", penulis: "Andera Hirata"});
            } else {
                reject("Gagal mengambil data buku");
            }
        }, 1500);
    });
}

// Menggunakan .then() dan .catch()
ambilDataBuku()
    .then((buku) => {
        console.log("Data buku:", buku);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

console.log("Mengambil data buku...");
