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

	codepen.objects.User = {
		name: null,
		email: null,
		username: null,
		password: null,
		is_logged_in: false
	}

	var NewUser = Object.create(codepen.objects.User, {
		firstname: {
			writable: true,
			enumerable: true,
			value: ''
		},
		lastname: {
			writable: true,
			enumerable: true,
			value: ''
		}
	});

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


	$('.btn-login').on('click', function (){
		var user = Object.create(NewUser);
		user.username = $('#login-username-field').val();
		user.password = $('#login-password-field').val();
		var response = codepen.api.login(user);
		console.log(response);

		//clear .val on click
		$('#login-username-field').val('');
		$('#login-password-field').val('');
	});


	$('.btn-signup').on('click', function(){
		var user = Object.create(NewUser);
		user.name = $('#signup-name-field').val();
		user.email = $('#signup-email-field').val();
		user.username = $('#signup-username-field').val();
		user.password = $('#signup-password-field').val();
		var response = codepen.api.signup(user);
		if (response.success === true) {

		} else {
			
		}
	});


});