<?php

	$data = json_decode(file_get_contents("php://input"));
	$getCurrentJSON = file_get_contents("mydata.json");
	$json = json_decode($getCurrentJSON);

	$keyVal = intval($data->id);
	$json[$keyVal] = $data;
	$json_final = json_encode($json);

	file_put_contents("mydata.json", $json_final);

	echo 'Success';

?>