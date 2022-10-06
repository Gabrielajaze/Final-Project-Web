const form = document.getElementById('form');
const username = document.getElementById('username');
const gender = document.getElementById('gender');
const nim = document.getElementById('nim');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPass = document.getElementById('confirm');
const agreement = document.getElementById('agreement');
const btn = document.getElementById('submit');


form.addEventListener('submit', (e) => {

    checkInput();

    console.log(formValid());
    if(formValid() == true){
        form.submit();
     }
     
    else {
         e.preventDefault();
    }
    

});

function formValid(){
    const formCntrl = form.querySelectorAll('.form-control');
    const agreementValue = agreement.value.trim();
    let result = true;
    formCntrl.forEach((container) =>{
        if(container.classList.contains('error')){
            result = false;
        }
    });

    if(!agreement.checked){
        alert('You must agree to the terms first.');
       result = false;
    }
    else{
        console.log("Checkbox selected: ", agreement.checked);

    }

    return result;
}

function checkInput(){
    const usernameValue = username.value.trim();
    const genderValue = gender.value.trim();
    const nimValue = nim.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPassValue = confirmPass.value.trim();
   

    if(usernameValue == ''){
        setErrorFor(username, 'Name cannot be blank');
        
        
    }
    else if(usernameValue.length < 5){
        setErrorFor(username, 'Must be 5 character or more');
    }

    else{
        setSuccesFor(username);
       
    }

    if(genderValue == "-1"){
        setErrorFor(gender, 'Choose your gender');
        
      
    }
    else{
        setSuccesFor(gender);
    }

    if(nimValue == ''){
        setErrorFor(nim, 'NIM cannot be blank');
       
    }
    else{
        setSuccesFor(nim);
    }

    
    if(phoneValue == ''){
        setErrorFor(phone, 'Address cannot be blank');
        
        
    }
    else{
        setSuccesFor(phone);
    }

    if(emailValue == ''){
        setErrorFor(email, 'Email cannot be blank');
        
    
    }
    else if (!isEmail(emailValue)){
        setErrorFor(email, 'Not a valid email');
        
       
    }
    else{
        setSuccesFor(email);
    }

    if(passwordValue == ''){
        setErrorFor(password, 'Password cannot be blank');
        
        
    }
    else{
        setSuccesFor(password);
    }

    if(confirmPassValue == ''){
        setErrorFor(confirmPass, 'Password Cannot be blank');  
    }

    else if(passwordValue !== confirmPassValue) {
		setErrorFor(confirmPass, 'Passwords does not match');
    }
    else{
        setSuccesFor(confirmPass);
    }


}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    if(formControl.classList.contains('success')){
        formControl.classList.remove('success');
    }

    formControl.classList.add('error');
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
  
}

function setSuccesFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    
    if(formControl.classList.contains('error')){
        formControl.classList.remove('error');
    }
    formControl.classList.add('success');
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}