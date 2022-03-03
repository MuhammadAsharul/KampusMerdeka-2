function transaksi(){
    let frm = window.document.getElementById("formulir");
    let nama = frm.nama.value;
    let produk = frm.produk.value;
    let jumlah = frm.jumlah.value;
    switch(produk){
        case 'Televisi':
            harga = 2000000;
            break;
        case 'Air Conditioner':
            harga = 3000000;
            break;
        case 'Kulkas':
            harga = 4000000;
            break;
        default :'Barang tidak ditemukan';
    }
    // hargaKotor
    let hargaKotor = harga * jumlah;
    // diskon
    if(jumlah >= "3" && produk == "Televisi"){
        diskon = hargaKotor * 0.3;
    }
    else if(jumlah >= "3" && produk == "Air Conditioner"){
        diskon = hargaKotor * 0.2;
    }
    else{
        diskon = hargaKotor * 0.1;
    }
    // ppn
    let ppn = (hargaKotor*0.1) - diskon;
    // harga bayar
    let hargaBayar = (hargaKotor - diskon) + ppn;
    let grupp = Intl.NumberFormat('id-ID');
    // cetak alerting
    alert("Nama: " + nama + "\nProduk: " + produk + "\nJumlah: " + jumlah + 
    "\nHarga: " + grupp.format(harga) +
    "\nHarga Kotor: " + grupp.format(hargaKotor) + "\nDiskon: " + grupp.format(diskon) + "\nPPN: " + grupp.format(ppn) + "\nHarga Bayar: " + grupp.format(hargaBayar));
}