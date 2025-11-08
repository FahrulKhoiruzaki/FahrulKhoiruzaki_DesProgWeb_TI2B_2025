<!DOCTYPE html>
<html>
    <head>
        <title>Form Input dengan Validasi</title>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    </head>
    <body>
        <h1>Form Input dengan Validasi</h1>
        <form id="myForm" method="post" action="proses_validasi.php">
            <label for="nama">Nama:</label>
            <input type="text" id="nama" name="nama"><br>

            <label for="email">Email:</label>
            <input type="text" id="email" name="email"><br>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password">
            <span id="password-error" style="color:red;"></span><br>

            <input type="submit" value="Submit">
        </form>

        <div id="hasil"></div>

        <script>
        $(function(){
            $("#myForm").on("submit", function(e){
                e.preventDefault();
                var nama = $("#nama").val();
                var email = $("#email").val();
                var password = $("#password").val();
                var valid = true;

                if (nama == "") {
                    alert("Nama harus diisi.");
                    valid = false;
                }

                if (email == "") {
                    alert("Email harus diisi.");
                    valid = false;
                }

                if (password.length < 8) {
                    $("#password-error").text("Password minimal 8 karakter.");
                    valid = false;
                } else {
                    $("#password-error").text("");
                }

                if (valid) {
                    $.ajax({
                        url: $(this).attr("action"),
                        type: "POST",
                        data: $(this).serialize(),
                        success: function(res){
                            $("#hasil").html(res);
                        }
                    });
                }
            });
        });
        </script>
    </body>
</html>
