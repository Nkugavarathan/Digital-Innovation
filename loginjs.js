const form=document.querySelector("#form");
const emailinput=document.querySelector("#emailinput");
const password=document.querySelector('#passwordinput')


form.addEventListener('submit',(e)=>{
e.preventDefault();
validateInput();
});

function validateInput(){
const emailinputVal=emailinput.value.trim();
const passwordVal=password.value.trim();

if(emailinputVal===''){
}
else{
    setSuccess(emailinput)
}

if(emailinputVal===''){
    setError(emailinput,"Email is required")
}
else if(validateEmail(emailinputVal)){
        setSuccess(emailinput)
}
else{
    setError(emailinput,"Please enter valid email !!")
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

}

function setError(element,message){
    const inputgroup=element.parentElement;
    const errorElement=inputgroup.querySelector('.error');

    errorElement.innerText=message;
    
    inputgroup.classList.add('error');
    inputgroup.classList.remove('success')

}
function setSuccess(element){
const inputgroup=element.parentElement;
    const errorElement=inputgroup.querySelector('.error');

    errorElement.innerText=''
    
    inputgroup.classList.add('success');
    inputgroup.classList.remove('error')

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