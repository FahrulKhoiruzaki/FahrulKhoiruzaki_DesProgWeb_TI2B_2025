<?php
$poin = 50;
$hadiahTambahan = ($poin > 500) ? true : false;

echo "Total Skor Anda: " . $poin . "<br>";
echo "Apakah pemain mendapatkan hadiah tambahan? " . ($hadiahTambahan ? "Ya" : "Tidak");
?>