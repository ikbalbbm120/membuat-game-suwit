var tanya = true
while ( tanya ) {
    // menangkap pilihan player//
    var p = prompt('pilihan : kucing,anjing,orang')
    // menangkap pilihan komputer//
    // membangkitkan bilangan random//
    var comp = Math.random();

    if( comp < 0.34) {
        comp = 'kucing';
    } else if ( comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'anjing'
    }

    var hasil =''
    // menentukan rules//
    if( p == comp) {
        alert('seri')
    } else if( p == 'anjing') {
        //if( comp == 'orang') {
            //hasil = 'menang!';
    // } else {
        // hasil = 'kalah';
    //}
        hasil = ( comp == 'kucing') ? 'MENANG' : 'KALAH!';
    } else if ( p == 'kucing' ) {
        hasil = ( comp == 'anjing' ) ? 'KALAH' : 'MENANG';
    } else if( p == 'orang' ) {
        hasil = ( comp == 'kucing') ? 'KALAH' : 'MENANG';
    } else {
        hasil = 'memasukan pilihan yang salah!!';
    }

    //tampilan hasilnya
    alert('kami memilih : ' + p + ' dan kompurter memilih : ' + comp + '\nmaka hasilnya : kamu' + hasil);

    tqanya = confirm('lagi?');
}

alert('terimakasih sudah bermain.')