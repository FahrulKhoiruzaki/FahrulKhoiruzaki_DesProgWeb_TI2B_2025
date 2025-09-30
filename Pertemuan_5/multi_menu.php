<?php
$menu = [
    [
        "nama" => "Beranda"
    ],
    [
        "nama" => "Berita",
        "subMenu" => [
            [
                "nama" => "Wisata",
                "subMenu" => [
                    [
                        "nama" => "pantai"
                    ],
                    [
                        "nama" => "Gunung"
                    ]
                ]
            ],
            [
                "nama" => "Kuliner"
            ],
            [
                "nama" => "Hiburan"
            ]
        ]
    ],
    [
        "nama" => "Tentang"
    ],
    [
        "nama" => "Kontak"
    ]
];
function tampilkanMenuBertingkat(array $menu) {
    echo "<ul>";
    foreach ($menu as $key => $item){
        echo "<li>{$item['nama']}</li>";
    }
    echo "</ul>";
}
tampilkanMenuBertingkat($menu);
echo "<br><br>";

function tampil(array $menu){
    echo "<ul>";
    foreach ($menu as $item){
        echo "<li>{$item['nama']}";
        if (!empty($item['subMenu']) && is_array($item['subMenu'])) {
            tampil($item['subMenu']);
        }
        echo "</li>";
    }
    echo "</ul>";
}
tampil($menu);
?>