<?php

$errors         = array();  	// array to hold validation errors
$data 			= array(); 		// array to pass back data

// validate the variables ======================================================
	if (empty($_POST['name']))
		$errors['name'] = 'Name is Required.';

	if (empty($_POST['issueTitle']))
		$errors['issueTitle'] = 'An Issue Title is Required.';

	if (empty($_POST['inputIssueDate']))
		$errors['inputIssueDate'] = 'Please Let Us Know When This Issue Occured.';

	if (empty($_POST['zip']))
		$errors['zip'] = 'A Proper Zip Code is Required.';

	// if(preg_match("/^[0-9]{5}$/", $_POST('zip') )) { 
	// 	$errors['zip'] = 'The ZIP code must be a 5-digit number.'; 

	if (empty($_POST['acctEmail']))
		$errors['acctEmail'] = 'We Will Need a Proper Account Email to Contact You.';

	if (empty($_POST['phonenumber']))
		$errors['phonenumber'] = 'A Phone number is required.';

// return a response ===========================================================

	// response if there are errors
	if ( ! empty($errors)) {

		// if there are items in our errors array, return those errors
		$data['success'] = false;
		$data['errors']  = $errors;
	} else {

		// if there are no errors, return a message
		$data['success'] = true;
		$data['message'] = 'Thank you for your input. We will look into this issue momentarily!';
	}

	// return all our data to an AJAX call
	echo json_encode($data);


