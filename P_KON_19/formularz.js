function validation()
{
	
	var name=document.getElementById("name").value;
	var subject=document.getElementById("subject").value;
	var phone=document.getElementById("phone").value;
	var email=document.getElementById("email").value;
	var message=document.getElementById("message").value;
	var error_message=document.getElementById("error_message");
	var text;
	error_message.style.padding="10px";
	
	if(name.length<3){
		text="Proszę podać poprawne imię";
		error_message.innerHTML=text;
		return false;
	}
	if(subject.length<4){
		text="Proszę podać poprawny temat";
		error_message.innerHTML=text;
		return false;
	}
	if(isNaN(phone) || phone.length!=9){
		text="Proszę podać prawidłowy numer telefonu";
		error_message.innerHTML=text;
		return false;
	}
	if(email.indexOf("@") == -1 || email.length<6){
		text="Proszę podać prawidłowy mail";
		error_message.innerHTML=text;
		return false;
	}
	if(message.length<=30){
		text="Proszę podać prawidłową długość wiadomości";
		error_message.innerHTML=text;
		return false;
	}
	alert("Formularz wypełniony prawidłowo!")
	
	return true;
	
	
	
	localStorage.setItem("name","Michal");
	localStorage.setItem("subject","sdsd");
	localStorage.setItem("phone",2313213);
	
	console.log(localStorage.getItem("name"));
}
