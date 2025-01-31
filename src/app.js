
let form = document.querySelector('form')

form.addEventListener("submit", e => {
    // if (validateForm()){
    //     location.reload();
    // }else{
    //     e.preventDefault();
    // }
    e.preventDefault();

    validateForm();
})

let validateForm = () => {

    let firstname = document.querySelector('#firstname')
    let firstnameval = document.querySelector('#firstname').value
    let firstnameclass = document.querySelector('.firstname')
    let lastname = document.querySelector('#lastname')
    let lastnameval = document.querySelector('#lastname').value
    let lastnameclass = document.querySelector('.lastname')
    let email = document.querySelector('#email')
    let emailval = document.querySelector('#email').value
    let emailclass = document.querySelector('.email')
    let password = document.querySelector('#password')
    let passwordval = document.querySelector('#password').value
    let passwordclass = document.querySelector('.password')

    let isValid = true;

    if(firstnameval.trim() === ""){
        firstname.classList.remove('border-gray-300')
        firstname.classList.add('bg-icon')
        firstname.placeholder = ' ';
        firstnameclass.classList.remove('hidden');
    }else{
        firstname.classList.add('border-gray-300')
        firstname.classList.remove('bg-icon')
        firstnameclass.classList.add('hidden');
    }

    if(lastnameval.trim() === ""){
        lastname.classList.remove('border-gray-300')
        lastname.classList.add('bg-icon')
        lastname.placeholder = ' ';
        lastnameclass.classList.remove('hidden');
    }else{
        lastname.classList.add('border-gray-300')
        lastname.classList.remove('bg-icon')
        lastnameclass.classList.add('hidden');
    }

    if(emailval.trim() === ""){
        email.classList.remove('border-gray-300')
        email.classList.add('bg-icon')
        email.placeholder = 'email@example/com';
        emailclass.classList.remove('hidden');
    }else{
        email.classList.add('border-gray-300')
        email.classList.remove('bg-icon')
        emailclass.classList.add('hidden');
    }

    if(passwordval.trim() === ""){
        password.classList.remove('border-gray-300')
        password.classList.add('bg-icon')
        password.placeholder = ' ';
        passwordclass.classList.remove('hidden');
    }else{
        password.classList.add('border-gray-300')
        password.classList.remove('bg-icon')
        passwordclass.classList.add('hidden');
    }

    return isValid;
}