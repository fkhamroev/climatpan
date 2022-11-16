<? 
    $to = 'edjaxarov@mail.ru';
    $from = ($_POST['phone']);

    $headers = "From: $from". "\r\n". 
    "Reply-to: $from".  "\r\n".
    "X-Mailer: PHP/ " . phpversion();


    if (mail($to, $headers)) {
        echo "Письмо отправлена";
    }
    else {
        echo "Письмо не отправлена";
    }
