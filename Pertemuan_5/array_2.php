<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title></title>
    </head>
    <body>
        <?php
            $Dosen = [
                'nama' => 'Elok Nur Hamdana',
                'domisili' => 'Malang',
                'jenis_kelamin' => 'Perempuan'
            ];
        ?>
        <table border="1">
            <tr>
                <th>Key</th>
                <th>Value</th>
            </tr>
            <?php
                foreach ($Dosen as $key => $value) {
                    echo "<tr>
                        <td>{$key}</td>
                        <td>{$value}</td>
                    </tr>";
                }
            ?>
        </table>
    </body>
</html>