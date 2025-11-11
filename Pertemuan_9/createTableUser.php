<?php
include "koneksi.php";

$sql = "CREATE TABLE user (
            id INT(11) AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(50) NOT NULL,
            password VARCHAR(255) NOT NULL
        )";

$hasil = mysqli_query($conn, $sql);

if ($hasil) {
    echo "Tabel user berhasil dibuat";
} else {
    echo "Gagal membuat tabel: " . mysqli_error($conn);
}

mysqli_close($conn);
?>