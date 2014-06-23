<?php

header('Access-Control-Allow-Origin: *');


$errors         = array();  	// array to hold validation errors
$data 			= array(); 		// array to pass back data

$email_to = "desgrafx@gmail.com";

$email_subject = "Technical Feedback";

$name 				= ($_GET['name']) ? $_GET['name'] : $_POST['name'];
$issueTitle 		= ($_GET['issueTitle']) ? $_GET['issueTitle'] : $_POST['issueTitle'];
$inputIssueDate 	= ($_GET['inputIssueDate']) ? $_GET['inputIssueDate'] : $_POST['inputIssueDate'];
$zip 				= ($_GET['zip']) ? $_GET['zip'] : $_POST['zip'];
$acctEmail 			= ($_GET['acctEmail']) ? $_GET['acctEmail'] : $_POST['acctEmail'];
$phonenumber 		= ($_GET['phonenumber']) ? $_GET['phonenumber'] : $_POST['phonenumber'];
$summary			= ($_GET['summary']) ? $_GET['summary'] : $_POST['summary'];
	
$state 				= ($_GET['state']) ? $_GET['state'] : $_POST['state'];
$city 				= ($_GET['city']) ? $_GET['city'] : $_POST['city'];
$street 			= ($_GET['street']) ? $_GET['street'] : $_POST['street'];

$device				= ($_GET['device']) ? $_GET['device'] : $_POST['device'];
$operatingSystem 	= ($_GET['operatingSystem']) ? $_GET['operatingSystem'] : $_POST['operatingSystem'];
$systemVersion 		= ($_GET['systemVersion']) ? $_GET['systemVersion'] : $_POST['systemVersion'];
$browser 			= ($_GET['browser']) ? $_GET['browser'] : $_POST['browser'];
$browserVersion		= ($_GET['browserVersion']) ? $_GET['browserVersion'] : $_POST['browserVersion'];

// validate the variables ======================================================
	if (empty($name))
		$errors['name'] = 'Name is Required.';

	if (empty($issueTitle))
		$errors['issueTitle'] = 'An Description is Required.';

	if (empty($inputIssueDate))
		$errors['inputIssueDate'] = 'Please Let Us Know When This Occured.';

	if (empty($zip ))
		$errors['zip'] = 'A Zip Code is Required.';

	$zip = stripslashes($zip );
	
	if(!preg_match('/^\d{5}$/', $zip)) $errors['zip'] = "Please enter your zip code as #####.";

	if (empty($acctEmail))
		$errors['acctEmail'] = 'We Will Need a Proper Account Email to Contact You.';

	if (empty($phonenumber))
		$errors['phonenumber'] = 'A Phone number is required.';

	$phone = stripslashes($phonenumber);

	if(!preg_match('/^\d{10}$/', $phone)) $errors['phonenumber'] = "Please enter phone number as ##########.";

	

// return a response ===========================================================

	// response if there are errors
	if ( ! empty($errors)) {

		// if there are items in our errors array, return those errors
		$data['success'] = false;
		$data['errors']  = $errors;
	} else {

		// if there are no errors, return a message
		$data['success'] = true;

		$data['message'] = ' Thank you for submitting this information. We are very sorry that you are experiencing technical difficulties. We will make it our priority to get back to you as soon as possible in order to facilitate a resolution. 
';

		$subject = $email_subject;

		$content = "Name: ". $name;

		$content .= "\n\nDescription: " . $issueTitle 
				. 	"\nDate: " . $inputIssueDate
				.	"\nEmail: " . $acctEmail
				.	"\nPhone: " . $phonenumber
				.	"\nZip: " . $zip  
				. "\n\nSummary: " . $summary . "\n\n";

		$content .= "\n\nStore Information" . "\n";

		$content .= "State: " . $state
				  .	"\nCity: " . $city
				  .	"\nStreet: " . $street . "\n\n";

	  	$content .= "\n\nSystem Information" . "\n";

	  	$content .= "Device:" . $device
				  .	 "\nDevice Operating System: "	.  $operatingSystem
				  .	 "\nDevice System Version: "	.  $systemVersion
				  .	 "\nBrowser: "	.  $browser
				  .	 "\nBrowser Version: "	.  $browserVersion . "\n\n";


		mail($email_to,$subject,$content, "From: " . $acctEmail . "\r\nReply-To: " . $acctEmail ."\r\nReturn-Path: " . $acctEmail."\r\n" );
		
		//echo $content;



	}

	// return all our data to an AJAX call
	echo json_encode($data);
	


