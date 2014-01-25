/*

############## API ##############

codepen.api.signup(user_object)
	description: to sign up a new user
	parameters: user object, which contains properties: name, email, username, password
	returns: response object

codepen.login(user_object)
	description: to login an existing user
	parameters: user object, which contains properties: username, password
	returns: response object


Reponse Objects:

{
	success: true/false,
	error: (string)
}


##users already signed up (can log in)
	('suzy', 'I@msoawesome')
	('conan', 'gingertastic')
	('jerry', '@#!$%@')

*/


$('document').ready(function() {

	$('.signup-form').hide();

	$('.signup-form-btn').on('click', function(){
		$('.login-form').hide();
		$('.signup-form').show();
		$('.login-form-btn').removeClass('active');
		$('.signup-form-btn').addClass('active');
	});

	$('.login-form-btn').on('click', function(){
		$('.signup-form').hide();
		$('.login-form').show();
		$('.signup-form-btn').removeClass('active');
		$('.login-form-btn').addClass('active');
	});

	//listen for click
	$('.btn-login').on('click', function (){
		//grab .val from username field, and password field and store in variables
		var loginUser = {};
		loginUser.username = $('#login-username-field').val();
		loginUser.password = $('#login-password-field').val();

		console.log((codepen.api.login(loginUser)));
		//change to not alert if there is not error
		alert(codepen.api.login(loginUser).error);

		//clear .val on click
		$('#login-username-field').val('');
		$('#login-password-field').val('');
	});


	$('.btn-signup').on('click', function(){
		var signupUser = {};
		signupUser.name = $('#signup-name-field').val();
		signupUser.email = $('#signup-email-field').val();
		signupUser.username = $('#signup-username-field').val();
		signupUser.password = $('#signup-password-field').val();

		console.log(codepen.api.signup(signupUser));
	});


});