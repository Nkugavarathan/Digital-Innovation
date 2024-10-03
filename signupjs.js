const form=document.querySelector("#form");
const username=document.querySelector('#usernameinput')
const emailinput=document.querySelector("#emailinput");
const password=document.querySelector('#passwordinput')
const cpassword=document.querySelector('#confirmpasswordinput');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInput();
})

function validateInput(){
    const emailinputVal=emailinput.value.trim();
    const usernameVal=username.value.trim();
    const passwordVal=password.value.trim();
    const cpasswordVal=cpassword.value.trim();
    
    if(usernameVal===''){
        setError(username,"UserName is required")
    }
    else{
        setSuccess(username)
    }

    if(emailinputVal===''){
        setError(emailinput,"Email is required")
    }
    else if(validateEmail(emailinputVal)){
            setSuccess(emailinput)
    }
    else{
        setError(emailinput,"Please enter valid email '")
    }
     
    if(passwordVal===''){
        setError(password,"Password is required")
    }
    else if(validatePassword(passwordVal)){
        setSuccess(password);
    }
    else{
        setError(password,"Password must include A-z or a-z or 0-9 this 5 charactors")
    }

    if(cpasswordVal===''){
        setError(cpassword,"Confirm Password is required")
    }
    else if(cpasswordVal!==passwordVal){
        setError(cpassword,"Password doesn't match")
    }
    else{
        setSuccess(cpassword)
    }
    
}
function setError(element,message){
      const inputGroup=element.parentElement;
      
      const errorElement=inputGroup.querySelector('.error');
      
      errorElement.innerText=message;
      inputGroup.classList.add('error')
      inputGroup.classList.remove('success')
}
function setSuccess(element){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error');
    
    errorElement.innerText="";
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}
function validateEmail(emai) {
    // Regular expression pattern for Gmail
    var gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail.com$/;
    return gmailPattern.test(emai); // retrun true if correct syntax
}

function validatePassword(val){
    var paspattern = /^[A-Za-z0-9]{5,}$/;
    return paspattern.test(val);
}

/* animate while scroll */
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });
  
    const hiddenElements = document.querySelectorAll('.conthidden,.hidden,.hiddenright');
    hiddenElements.forEach((el) => observer.observe(el));
  });
  