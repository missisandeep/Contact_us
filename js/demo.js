// ==========================
// form validation section
// =======================

function validationForm(){
var sandy_name, sandy_email, sandy_mobile, sandy_subject, sandy_message;

sandy_name = document.myForm.name.value;
sandy_email = document.myForm.email.value;
sandy_mobile = document.myForm.mobile.value;
sandy_subject = document.myForm.subject.value;
sandy_message = document.myForm.message.value;

// form string check string
var validationsstring = /^[A-Za-z]+$/;

// name validation 
if (sandy_name == '') {
	alert("Name must be filled out");
	document.myForm.name.focus();
				return false;
}

if (sandy_email == '') {
	alert("Email Id must be filled out");
	return false;
}


if (sandy_mobile == '') {
	alert("Mobile Number must be filled out");
	return false;
}

if (sandy_subject == '') {
	alert("Subject must be filled out");
	return false;
}
if (sandy_message == '') {
	alert("message must be filled out");
	return false;
}

}

// ===================
// sandy Name
// ===================

function sandyName(){
	var validationsstring = /^[a-zA-z]+$/;
	alert(validationsstring);
	if (true) {}
}
