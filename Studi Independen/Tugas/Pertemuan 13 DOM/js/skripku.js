function cetak(){
    // tangkap element2 form
    let frm = window.document.getElementById("formulir");
    // tangkap element2 input
    let nama = frm.nama.value;
    let nl = frm.nilai.value;
    let ket = (nl >= 60) ? "Lulus" : "Tidak Lulus";
    alert("Nama: " + nama + "\nNilai: " + nl+ "\nDinyatakan: " + ket);
}