<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <h2>Array Terindeks</h2>
        <?php 
            $Listendosen=["Elok Nur Hamdana", "Unggul Pemenang", "Bagas Nugraha"];

            for ($i = 0; $i < count($Listendosen); $i++){
                echo $Listendosen[$i] . "<br>";
            }
        ?>
    </body>
</html>