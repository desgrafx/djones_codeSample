var formApp = angular.module('formApp', []);

					
function formController($scope, $http) {

	$scope.myView = true;
	$scope.formData = {};
	
	
	$scope.processForm = function() {
			$http({
			        method  : 'POST',
			        url     : 'processForm.php',
			        data    : $.param($scope.formData),  // pass in data as strings
			        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
			    })
		        .success(function(data) {
		            console.log(data);

		            if (! data.success) {
		            
		        
		                $scope.errorIssueTitle = data.errors.issueTitle;
		                $scope.errorInputIssueDate = data.errors.inputIssueDate;
		                $scope.errorName = data.errors.name;
		                $scope.errorZip = data.errors.zip;
		                $scope.errorAcctEmail = data.errors.acctEmail;
		                $scope.errorPhonenumber = data.errors.phonenumber;
		            } else {
		            	
		               	$scope.message = data.message;
		               	$scope.myView = false;
		            }
		        });
	};

	
}
