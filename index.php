    <?php   #Me quedé en el video 156 proximo video a ver 157# ?>

<?php

    require_once "./config/app.php";
    require_once "./autoload.php";
    require_once "./app/views/inc/Session_start.php";
    
    if(isset($_GET['views'])){
        $url=explode("/",$_GET['views']);

    }else{
        $url=["login"];
    }

?>

    <!DOCTYPE html>
    <html lang="es">
    <head>
        <?php require_once "./app/views/inc/head.php" ?>
    </head>
    <body>
            <?php 
                    use app\controllers\viewsController;

                    $viewsController = new viewsController();

                    $vista = $viewsController->obtenerVistasControlador($url[0]);

                    if($vista=="login"|| $vista=="404"){
                            require_once "./app/views/content/".$vista."-view.php";
                    }else{
                            require_once "./app/views/inc/navbar.php";
                            require_once $vista;
                    }
                    
                    require_once "./app/views/inc/scrpit.php" 
            ?>


    </body>
    </html>