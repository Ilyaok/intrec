<?php
require_once __DIR__ . '/activerecord/ActiveRecord.php';

ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

// initialize ActiveRecord
ActiveRecord\Config::initialize(function($cfg)
{
    $cfg->set_model_directory(__DIR__ . '/models');
    $cfg->set_connections(require __DIR__ . '/config.php');
});

$tests = Test::all();
$result = [];
foreach ($tests as $test) {
	$result[] = $test->attributes();  
}

?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
 <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <title>Пример веб-страницы</title>
 </head>
 <body>
  <h1>Записи из таблицы test</h1>
  <!-- Тут выводим данные в читаемый вид на страницу -->
  <pre><?= print_r($result) ?>
  </pre>
   
   <script>
     // Тут данные будут лежать в JS объекте и с ним можно работать
     const data = <?= json_encode($result) ?>;     
     console.log(data);     
   </script>
 </body>
</html>