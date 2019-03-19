var message = "";

function isValidUserCredentials() {
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var b = false;
	if (email == "" || password == "") {
		message = "Email and Password is required";
	} else {
		message = "";
		b = true;
	}
	if (b == true) {
		b = isValidEmail(email);
	}
	if (b == true) {
		b = isValidPassword(password);
	}
	document.getElementById("errMsg").innerText = message;
	return b;
}

function isValidEmail(email) {
	var b1 = false;
	if (message.length == 0 && email.match(/^\w+@\w+\.\w+$/)) {
		b1 = true;
	} else {
		message = "Invalid Email";
	}
	return b1;
}

function isValidPassword(password) {
	var b1 = false;
	if (password.match(/^[a-zA-Z0-9@.]{5,8}$/)) {
		b1 = true;
	} else {
		message = "Invalid Password";
	}
	return b1;
}

function clearErr() {
	document.getElementById("errMsg").innerText = "";
}

function clearErr2() {
	document.getElementById("errMsg2").innerText = "";
}

function isValidPlayerSignUp() {
	var name = document.getElementById("name").value;
	var dob = document.getElementById("dob").value;
	var gender = document.getElementById("gender").value;
	var contact = document.getElementById("contact").value;
	var team = document.getElementById("team").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var password2 = document.getElementById("password2").value;
	var b = false;
	if (name == "" || dob == "" || gender == "" || contact == "" || team == ""
			|| email == "" || password == "") {
		message = "All fields must be completed";
	} else {
		message = "";
		b = true;
	}
	if (b == true) {
		b = isValidName(name);
	}
	/*
	 * if (b == true) { b = isValidDob(dob); }
	 */
	/*
	 * if (b == true) { b = isValidGender(gender); }
	 */
	if (b == true) {
		b = isValidContact(contact);
	}
	if (b == true) {
		b = isValidTeam(team);
	}
	if (b == true) {
		b = isValidEmail(email);
	}
	if (b == true) {
		b = isValidPassword(password);
	}
	if (b == true) {
		b = isValidPassword2(password2, password);
	}
	document.getElementById("errMsg").innerText = message;
	return b;
}

function isValidName(name) {
	var b1 = false;
	if (message.length == 0 && name.match(/^[a-zA-Z]{3,20}$/)) {
		b1 = true;
	} else {
		message = "Invalid Name";
	}
	return b1;
}

/*
 * function isValidDob(dob) { var b1 = false; if
 * (dob.match(/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/)) { b1 = true; } else { message =
 * "Invalid Date"; } return b1; }
 */

/*
 * function isValidGender(gender) { var b1 = false; if (gender != "") { b1 =
 * true; } else { message = "Invalid Gender"; } return b1; }
 */

function isValidContact(contact) {
	var b1 = false;
	if (contact.match(/^[0-9]{10}$/)) {
		b1 = true;
	} else {
		message = "Invalid Contact Number";
	}
	return b1;
}

function isValidTeam(team) {
	var b1 = false;
	if (team.match(/^[a-zA-Z]{3,15}$/)) {
		b1 = true;
	} else {
		message = "Invalid Team";
	}
	return b1;
}

function isValidPassword2(password2, password) {
	var b1 = false;
	if (password2 == password) {
		b1 = true;
	} else {
		message = "Passwords must be same";
	}
	return b1;
}

function isValidTeamSignUp() {
	var teamname = document.getElementById("teamname").value;
	var coachname = document.getElementById("coachname").value;
	var b = false;
	if (teamname == "" || coachname == "") {
		message = "Team and coach names are required";
	} else {
		message = "";
		b = true;
	}
	if (b == true) {
		b = isValidTeamname(teamname);
	}
	if (b == true) {
		b = isValidCoachname(coachname);
	}
	document.getElementById("errMsg2").innerText = message;
	return b;
}

function isValidTeamname(teamname) {
	var b1 = false;
	if (teamname.match(/^[a-zA-Z]{3,50}$/)) {
		b1 = true;
	} else {
		message = "Invalid Team Name";
	}
	return b1;
}

function isValidCoachname(coachname) {
	var b1 = false;
	if (coachname.match(/^[a-zA-Z]{3,50}$/)) {
		b1 = true;
	} else {
		message = "Invalid Coach Name";
	}
	return b1;
}