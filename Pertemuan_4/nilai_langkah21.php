<?php
$nilaiSiswa = [85, 92, 78, 64, 90, 75, 88, 79, 70, 96];

sort($nilaiSiswa);
$totalNilai = 0;

for ($i = 2; $i < count($nilaiSiswa) - 2; $i++) {
    $totalNilai += $nilaiSiswa[$i];
}

echo "Total Nilai: " . ($totalNilai) . "<br>";

$rataRata = $totalNilai / (count($nilaiSiswa) - 4);

echo "Rata-rata nilai: " . ($rataRata);
?>