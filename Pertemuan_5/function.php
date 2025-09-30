<?php
    function perkenalan(){
    echo "Assalamualaikum, ";
    echo "Perkenalkan,  nama saya fahrul<br/>";
    echo "Senang berkenalan dengan Anda<br/>";
    }
    perkenalan();
    perkenalan();
    echo"<br><br>";

    function perkenalan1($nama, $salam){
        echo $salam.", ";
        echo "Perkenalkan, nama saya ".$nama."<br/>";
        echo "Senang berkenalan dengan Anda<br/>";
    }

    perkenalan1("Hamdana", "Hallo");
    echo "<hr>";

    $saya = "Elok";
    $ucapanSalam = "Selamat pagi";

    perkenalan1($saya, $ucapanSalam);

    echo"<br><br>";

    function perkenalan2($nama, $salam="Assalamualaikum"){
        echo $salam.", ";
        echo "Perkenalkan, nama saya ".$nama."<br/>";
        echo "Senang berkenalan dengan Anda<br/>";
    }

    perkenalan2("Hamdana", "Hallo");
    echo "<hr>";

    $saya = "Elok";
    $ucapanSalam = "Selamat pagi";

    perkenalan2($saya);
?>