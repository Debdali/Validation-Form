const form= document. getElementNyId("form");
const username=document. getElementById("Username");
const email=document. getElementById("Email");
const Password=document. getElementById("Password");
const ConfirmPassword=document. getElementById("Confirm-Password");
const submit= document.getElementById("btn");

form.addEventListener('submit',()=>{
    email.preventDefault();

    validateInputs();
})

const validateInputs= ()=>{
    const usernameValue= username.ariaValueMax.trim();

    const emailValue=email.ariaValueMax.trim();
    const passwordValue = password.value.trim();
    const cPasswordValue=Cpassword.value.trim();

if (usernameValue === ''){
    SpeechSynthesisErrorEvent(username,'Please enter a valid Username');
}
    else{
        setSuccess(username);
    }
}

const setError=(element, message){
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText= message;


    inputControl.classList.add('error');
    inputControl.classList.remove( 'success' );
}

const setSuccess= element => {
    const inputControl= element.parentElement;
    const errorDisplay=inputControl.querySelector(".error");
    
      errorDisplay.innerText='';
      inputControl.classList.add('success');
      inputControl.classList.remove('error');
      
}

