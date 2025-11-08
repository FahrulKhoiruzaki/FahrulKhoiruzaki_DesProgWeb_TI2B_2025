<?php
$input = isset($_POST['input']) ? $_POST['input'] : '';
$input = htmlspecialchars($input, ENT_QUOTES, 'UTF-8');

$email = isset($_POST['email']) ? $_POST['email'] : '';
?>
<form method="post">
    <label>Nama:</label>
    <input type="text" name="input"><br><br>

    <label>Email:</label>
    <input type="text" name="email"><br><br>

    <input type="submit" value="Kirim">
</form>

<?php
echo "<p>Hasil nama (aman): $input</p>";

if ($email !== '') {
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<p>Email valid: " . htmlspecialchars($email, ENT_QUOTES, 'UTF-8') . "</p>";
    } else {
        echo "<p>Email tidak valid.</p>";
    }
}
?>