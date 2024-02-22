function run(){

    const nama = prompt("Masukkan nama Anda:");
    const umur = parseInt(prompt("Masukkan umur Anda:"));
    
    
    if (umur > 13) {
        const pilihanStudio = prompt("Pilih studio (A, B, C):");
    
        if (pilihanStudio === 'A') {
            alert(`TIKET STUDIO \nTiket   : ${nama} \nStudio : A \nUmur  : ${umur}`);
        } else if (pilihanStudio === 'B') {
            alert(`TIKET STUDIO \nTiket   : ${nama} \nStudio : B \nUmur  : ${umur}`);
        } else if (pilihanStudio === 'C') {
            alert(`TIKET STUDIO \nTiket   : ${nama} \nStudio : C \nUmur  : ${umur}`);
        } else {
            alert("Pilihan studio tidak valid");
        }
    } else {
        alert("Maaf, Anda tidak boleh masuk studio karena umur Anda kurang dari 13 tahun.");
    }
    }