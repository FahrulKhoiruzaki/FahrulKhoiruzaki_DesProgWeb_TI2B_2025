<?php
include "koneksi.php";

$sql = "INSERT INTO user (username, password)
        VALUES ('admin', MD5('admin123'))";

$hasil = mysqli_query($conn, $sql);

if ($hasil) {
    echo "Data berhasil dimasukkan ke tabel user";
} else {
    echo "Gagal memasukkan data: " . mysqli_error($conn);
}
mysqli_close($conn);
?>