$(document).ready(function() {

			//Model setup
		var pressStart 	= 	$('a.startButton'),
			endItAll	=	$('a.endButton'),
			myModal		=	$('#modal'),
			myOverlay	=	$('#modal-background'),
			myModalBox	=	$('#modalWrapper'),  // Assign Div ID
			myModalBoxH	=	myModalBox.height(), 
			modalH 		=	"-"+myModalBoxH/2,
			myModalBoxW	=	myModalBox.width(),	
			modalW 		=	"-"+myModalBoxW/2;

			

			
			myModalBox.hide();
			endItAll.hide();

			$(pressStart).on("click", function(dj){
				
				dj.preventDefault();

				//Find div with ID
				var modalItem 		= $(this).attr('href');
		            modalLocation 	= modalItem.replace("#", ''),
		            insertModal 	= document.getElementById(modalLocation),

		            myModalBoxH	=	myModalBox.height(), 
		            modalH 		=	"-"+myModalBoxH/2,
		            myModalBoxW	=	myModalBox.width(),	
		            modalW 		=	"-"+myModalBoxW/2;
		            

 
				// Bring in the overlay
				myOverlay.fadeIn();
				
				// Bring in the modal window with new content
				myModalBox
				.css({"margin-top"	: modalH + "px", 	// Assign Margin Top 
				"margin-left"	: modalW + "px"		//Assign Margin Left
				})
				.prepend(insertModal)
				.fadeIn(1000);

				//Fade in content
				$(insertModal).fadeIn();

				//Fade the button in background
				$(this).fadeOut;
				
			});

			//Process Form content

			$('input[type="submit"]').on('click', function(dj){

				//Form inputs
				fullName 	=	$('#fullName').val(),
				emailAddr 	=	$('#emailAddress').val();


				//Making sure that the inputs are not empty
				if (fullName == "" || emailAddr ==""){
					//Error nothing entered
					alert("We have a problem here O_o ");
				}
				if (fullName == "" ){
					//Error no name
					alert("No Name?");
				}
				if (emailAddr == ""){
					//Error no email
					alert("How will I be able to contact you?");
				}else{
					//Passing the good data through ajax
					var dataString	=	'Name' + fullName + '&email' + emailAddr;

					$.ajax({
						type	: "POST", 
						url 	: '#',
						data 	: dataString,
						success : function(){
							
							//Thank you message
							myModal.hide();
							myModalBox.delay(1000).fadeIn(850).append($('#thanks').html('<h3 class="message" >Thank You, ' + fullName + ' for signing up. You will not recieve an email at ' + emailAddr + ' since this is a test!!! ;)</h3>'));

						}
					});
					return false;
				}	
			});


				
			// Close modal by click on overlay

			myOverlay.on("click", function(dj){

				// Hide the modal window
				$(insertModal).fadeOut();
				myModalBox.fadeOut();

				// Hide the overlay
				myOverlay.fadeOut();

				//fade button back in
				endItAll.fadeIn();
				pressStart.fadeOut();
			});

			//Leave page - Redirect
			endItAll.on('click', function(dj) {
				dj.preventDefault();

				window.location = 'http://www.desgrafx.com/demetrius'
			})

	});