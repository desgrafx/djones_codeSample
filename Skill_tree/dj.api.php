<?php

	$getCurrentJSON = file_get_contents("mydata.json");

	if (!empty($getCurrentJSON)) {

		echo $getCurrentJSON;

	} else {

		echo '500';

	}

?>