let stok = 15;
// if - else if - else
    if (stok > 10) {
        console.log("Stok aman");
    } else if (stok > 0) {
        console.log("Stok menipis");
    } else {
        console.log("Stok habis");
    }   

    // Ternary operator
    let status = stok > 0 ? "Tersedia" : "Habis";
    console.log(`Status buku: ${status}`);