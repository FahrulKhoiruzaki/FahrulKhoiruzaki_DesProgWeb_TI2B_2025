<?php
$harga = 120000;
$diskon = 20;

if ($harga > 100000) {
    $jumlahDiskon = ($diskon / 100) * $harga;

    $hargaBayar = $harga - $jumlahDiskon;

    echo "Harga setelah diskon: Rp." . $hargaBayar;
}
?>