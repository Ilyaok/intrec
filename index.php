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

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<html>
<head>
    <title>Интерактивная карта рекрутмента test</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=1f430c08-c22e-4f42-9364-8d755dc6df37" type="text/javascript"></script>
  <code><script src="src/cluster_balloon_twoColumns.js?v=<?= filemtime(__DIR__ . '/src/cluster_balloon_twoColumns.js') ?>" type="text/javascript"></script></code>
	<style>
		html, body { margin: 0; padding: 0; }
		html, body, #map { width: 100%; height: 100%; }

		.ballon_header { font-size: 16px; margin-top: 0; margin-bottom: 10px; color: #708090; }
		.ballon_body { font-size: 14px; text-align: center; }
		.ballon_footer { font-size: 12px; text-align: right; border-top: 1px solid #7D7D7D; color: #7D7D7D; margin-top: 10px; }
	</style>
</head>
	<body>
	<div id="map"></div>
	</body>
</html>
