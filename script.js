$(document).ready(function(){
    $.ajax({
        url: 'data.json',
        type: 'GET',
        dataType: 'json',
        success: function(data){
            // Menampilkan informasi toko
            $('#nama-toko').text(data.nama_toko);
            $('#alamat').text(data.alamat);

            // Menampilkan koleksi buku
            var buku = data.koleksi_buku;
            for(var i = 0; i < buku.length; i++){
                var judul = buku[i].judul;
                var pengarang = buku[i].pengarang;
                var tahun_terbit = buku[i].tahun_terbit;
                var newRow = $('<tr>');
                newRow.append('<td>' + judul + '</td>');
                newRow.append('<td>' + pengarang + '</td>');
                newRow.append('<td>' + tahun_terbit + '</td>');
                $('#data-buku').append(newRow);
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            console.log('Error: ' + textStatus + ' - ' + errorThrown);
        }
    });
});
