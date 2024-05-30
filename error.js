const form = document.getElementById('form') ;
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');
const lname_error = document.getElementById('lname_error');
const password_error = document.getElementById('password_error');
const show_password = document.getElementById('eye_icon');
const password = document.getElementById('password');
const alert = document.getElementById('alert');



form.addEventListener('submit', (e) => {

    
    if (firstName.value === '')
    {
        e.preventDefault();
        name_error.innerHTML = "firstname cannot be empty";
    }
    //function validateEmail(email) {
        var re =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       // return re.test(String(email).toLowerCase());
        
    if (!email.value.match(re))
    {

        e.preventDefault();
        email_error.innerHTML = "looks like this is not an email";
        

    }

    if (lastName.value === '')

    e.preventDefault();
      {  lname_error.innerHTML = "lastname cannot be empty";}

        if (password.value === '')

        e.preventDefault();
        password_error.innerHTML = "password cannot be empty";

        
        
});

show_password.addEventListener('click', function(){

    this.classList.toggle("fa fa-eye");
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";

    passwordField.setAttribute("type", type);
});

