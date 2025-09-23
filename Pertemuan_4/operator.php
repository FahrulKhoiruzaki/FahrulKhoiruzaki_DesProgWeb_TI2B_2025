<?php
$a = 10;
$b = 5;

$hasilTambah = $a + $b;
$hasilKurang = $a - $b;
$hasilKali = $a * $b;
$hasilBagi = $a / $b;
$sisaBagi = $a % $b;
$pangkat = $a ** $b;

echo "{$hasilTambah} <br>";
echo "{$hasilKurang} <br>";
echo "{$hasilKali} <br>";
echo "{$hasilBagi} <br>";
echo "{$sisaBagi} <br>";
echo "{$pangkat} <br>";

echo "<br>";

$hasilSama = $a == $b;
$hasilTidakSama = $a != $b;
$hasilLebihKecil = $a < $b;
$hasilLebihBesar = $a > $b;
$hasilLebihKecilSama = $a <= $b;
$hasilLebihBesarSama = $a >= $b;

echo "Hasil: " . ($hasilSama ? 'true' : 'false') . "<br>";
echo "Hasil: " . ($hasilTidakSama ? 'true' : 'false') . "<br>";
echo "Hasil: " . ($hasilLebihKecil ? 'true' : 'false') . "<br>";
echo "Hasil: " . ($hasilLebihBesar ? 'true' : 'false') . "<br>";
echo "Hasil: " . ($hasilLebihKecilSama ? 'true' : 'false') . "<br>";
echo "Hasil: " . ($hasilLebihBesarSama ? 'true' : 'false') . "<br>";

echo "<br>";

$hasilAnd = $a && $b;
$hasilOr = $a || $b;
$hasilNotA = !$a;
$hasilNotB = !$b;

echo "Hasil: " . ($hasilAnd ? 'true' : 'false') . "<br>";
echo "Hasil: " . ($hasilOr ? 'true' : 'false') . "<br>";
echo "Hasil: " . ($hasilNotA ? 'true' : 'false') . "<br>";
echo "Hasil: " . ($hasilNotB ? 'true' : 'false') . "<br>";

echo "<br>";


echo "Hasil: " . ($a += $b) . "<br>";
echo "Hasil: " . ($a -= $b) . "<br>";
echo "Hasil: " . ($a *= $b) . "<br>";
echo "Hasil: " . ($a /= $b) . "<br>";
echo "Hasil: " . ($a %= $b) . "<br>";

echo "<br>";

$haasilIdentik = $a === $b;
$haasilTidakIdentik = $a !== $b;

echo "Hasil: " . ($haasilIdentik ? 'true' : 'false') . "<br>";
echo "Hasil: " . ($haasilTidakIdentik ?  'true' : 'false') . "<br>";
?>