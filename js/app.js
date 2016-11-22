// Problem : hits are shown even if form is valid
//solution:hide and show thm at appropriate times 
var $password=$("#password");
var $confirmPassword= $("#confirm_password");
//Hide hints 

$("form span").hide();

function passwordEvent(){
	if($password.val().length > 8){
		// hide hint if valid 
		$password.next().hide();
	}
	else {
		  // else show hint 
		 $password.next().show();
	}
}
function confirmPasswordEvent(){
	//find out if password and confirmation match 
	if ($password.val()=== $confirmPassword.val()){
		 // hide hints if matched 
		 $confirmPassword.next().hide();
	}
	else {
		  //else show the hint 
		  $confirmPassword.next().show();
	}
}

//When events happens on password input 
$password.focus(passwordEvent).keyup(passwordEvent)
         .focus(confirmPasswordEvent).keyup(confirmPasswordEvent);

	//find out if the password is valid 
  


// When events happens on confiramtion 

$confirm_password.focus(confirmPasswordEvent).keyup(confirmPasswordEvent);
  