let daftarBuku = ["Laskar Pelangi", "Bumi Manusia", "Sang Pemimpi"];

//For loop biasa
console.log("===== FOR LOOP =====");
for (let i = 0; i < daftarBuku.length; i++) {
    console.log(`${i + 1}. ${daftarBuku[i]}`);
}

// For...of loop (cara modern)
console.log("\n===== FOR...OF LOOP =====");
for (let buku of daftarBuku) {
    console.log(`-${buku}`);
}