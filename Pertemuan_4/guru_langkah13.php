<?php
$nilaiSiswa = [
    ['Alice', 85],
    ['Bob', 92],
    ['Charlie', 78],
    ['David', 64],
    ['Eva', 90],
];

$totalNilai = 0;
foreach ($nilaiSiswa as $nilai) {
    $totalNilai += $nilai[1];
}
$rataRata = $totalNilai / count($nilaiSiswa);

echo "Nilai rata-rata: " . $rataRata . "<br>";
echo "Daftar nilai siswa yang memiliki nilai diatas rata-rata: <br>";

foreach ($nilaiSiswa as $siswa) {
    if ($siswa[1] > $rataRata) {
        echo $siswa[0] . " dengan nilai " . $siswa[1] . "<br>";
    }
}
?>