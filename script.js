const form =document.getElementById('form');
const username =document.getElementById('username');
const email =document.getElementById('email');
const password =document.getElementById('password');
const password2=document.getElementById('password2');

function showError(input,message)
{
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;
}
function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success'
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

// form.addEventListener('submit', function(e){
//     e.preventDefault();
    
//     if(username.value==''){
//         showError(username,"User name is required");
//     }
//     else{
//         showSuccess(username);
//     }

//     if(email.value=='' ){
//         showError(email,"email name is required");
//     }
//     else if(!validateEmail(email.value))
//     {
//         showError(email,"Enter valid Email");
//     }
//     else{
//         showSuccess(email);
//     }

//     if(password.value==''){
//         showError(password,"Password name is required");
//     }
//     else{
//         showSuccess(password);
//     }

//     if(password2.value==''){
//         showError(password2,"Password name is required");
//     }
//     else{
//         showSuccess(password2);
//     }
// });


/////BETTER APPROACH
function checkRequired(input){
    input.forEach(input => {
        if(input.value.trim()==='')
        {
            showError(input,`${getFieldName(input)} is required`)
        }
        else{
            showSuccess(input)
        }
    });
}
function getFieldName(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}

function passwordMatch(input1,input2)
{
    if(input1.value!==input2.value)
    {
        showError(input2,'Password do not match')
    }
}


function checkLength(input,min,max)
{
    if(input.value.length<min)
    {
        showError(input,`${getFieldName(input)} must be greater than ${min} character`)
    }
    else if(input.value.length>max)
    {
        showError(input,`${getFieldName(input)} must be less than ${max} character`)
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username,email,password,password2]);

    checkLength(username,3,15);
    checkLength(password,6,15);
    passwordMatch(password,password2)
})