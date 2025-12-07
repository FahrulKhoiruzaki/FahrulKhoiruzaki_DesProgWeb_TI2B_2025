<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

require "config/koneksi.php";
require "fungsi/pesan_kilat.php";
require "fungsi/anti_injection.php";

if (!isset($_POST['username'], $_POST['password'])) {
    header("Location: login.php");
    exit;
}

$username = antiinjection($koneksi, $_POST['username']);
$password = $_POST['password'];
$query  = "SELECT username, level, salt, password AS hashed_password 
            FROM user
            WHERE username = '$username'";
$result = mysqli_query($koneksi, $query);
$row    = mysqli_fetch_assoc($result);
mysqli_close($koneksi);

if ($row) {
    $hashed_password = $row['hashed_password'];
    if (password_verify($password, $hashed_password)) {
        $_SESSION['username'] = $row['username'];
        $_SESSION['level']    = $row['level'];

        header("Location: index.php");
        exit;
    } else {
        pesan('danger', "Login gagal. Password Anda salah.");
        header("Location: login.php");
        exit;
    }
} else {
    pesan('warning', "Username tidak ditemukan.");
    header("Location: login.php");
    exit;
}
?>
