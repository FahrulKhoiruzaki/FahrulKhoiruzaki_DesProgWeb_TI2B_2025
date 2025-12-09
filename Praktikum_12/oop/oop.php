<?php
class Car1{
    public $brand;

    public function startEngine(){
        echo "Engine started";
    }
}
$car1 = new Car1();
$car1->brand = "Toyota";

$car2 = new Car1();
$car2->brand = "Honda";

$car1->startEngine();
echo $car2->brand;
?>