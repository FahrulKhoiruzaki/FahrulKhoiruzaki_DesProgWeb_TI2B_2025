<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

session_start();

// Wajib login dulu
if (empty($_SESSION['username'])) {
    header("Location: ../login.php");
    exit;
}

require '../config/koneksi.php';
require '../fungsi/pesan_kilat.php';
require '../fungsi/anti_injection.php';


// =====================================
// TAMBAH JABATAN  (?jabatan=tambah)
// =====================================
if (!empty($_GET['jabatan']) && $_GET['jabatan'] == 'tambah') {

    $jabatan    = antiinjection($koneksi, $_POST['jabatan']);
    $keterangan = antiinjection($koneksi, $_POST['keterangan']);

    $query = "INSERT INTO jabatan (jabatan, keterangan)
              VALUES ('$jabatan', '$keterangan')";

    if (mysqli_query($koneksi, $query)) {
        pesan('success', 'Jabatan Baru Ditambahkan.');
    } else {
        pesan('danger', 'Menambahkan Jabatan Karena: ' . mysqli_error($koneksi));
    }

    header("Location: ../index.php?page=jabatan");
    exit;
}


// =====================================
// TAMBAH ANGGOTA (?anggota=tambah)
// =====================================
if (!empty($_GET['anggota']) && $_GET['anggota'] == 'tambah') {

    // data login user
    $username = antiinjection($koneksi, $_POST['username']);
    $password = antiinjection($koneksi, $_POST['password']);
    $level    = antiinjection($koneksi, $_POST['level']);

    // data anggota
    $jabatan       = antiinjection($koneksi, $_POST['jabatan']);
    $nama          = antiinjection($koneksi, $_POST['nama']);
    $jenis_kelamin = antiinjection($koneksi, $_POST['jenis_kelamin']);
    $alamat        = antiinjection($koneksi, $_POST['alamat']);
    $no_telp       = antiinjection($koneksi, $_POST['no_telp']);

    // SALT + HASH password (sesuai praktikum login)
    $salt              = bin2hex(random_bytes(16));
    $combined_password = $salt . $password;
    $hashed_password   = password_hash($combined_password, PASSWORD_BCRYPT);

    // 1) Simpan akun ke tabel user
    $queryUser = "INSERT INTO user (username, password, salt, level)
                  VALUES ('$username', '$hashed_password', '$salt', '$level')";

    if (mysqli_query($koneksi, $queryUser)) {

        // ambil id user terakhir
        $last_id = mysqli_insert_id($koneksi);

        // 2) Simpan biodata ke tabel anggota
        $queryAnggota = "INSERT INTO anggota (nama, jenis_kelamin, alamat, no_telp, user_id, jabatan_id)
                         VALUES ('$nama', '$jenis_kelamin', '$alamat', '$no_telp', '$last_id', '$jabatan')";

        if (mysqli_query($koneksi, $queryAnggota)) {
            pesan('success', "Anggota Baru Ditambahkan.");
        } else {
            pesan('warning', "Gagal Menambahkan Anggota Tetapi Data Login Tersimpan Karena: " . mysqli_error($koneksi));
        }

    } else {
        pesan('danger', "Menambahkan Anggota Karena: " . mysqli_error($koneksi));
    }

    header("Location: ../index.php?page=anggota");
    exit;
}


// Kalau tidak ada parameter apa-apa, balik ke dashboard saja
header("Location: ../index.php");
exit;
