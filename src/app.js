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
let form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if(firstnameval.length == " "){
        firstname.classList.remove('border-gray-300')
        firstname.classList.add('bg-icon')
        firstname.placeholder = ' ';
        firstnameclass.classList.remove('hidden');
    }

    if(lastnameval.length == " "){
        lastname.classList.remove('border-gray-300')
        lastname.classList.add('bg-icon')
        lastname.placeholder = ' ';
        lastnameclass.classList.remove('hidden');
    }

    if(emailval.length == " "){
        email.classList.remove('border-gray-300')
        email.classList.add('bg-icon')
        email.placeholder = ' ';
        emailclass.classList.remove('hidden');
    }
    if(passwordval.length == " "){
        password.classList.remove('border-gray-300')
        password.classList.add('bg-icon')
        password.placeholder = ' ';
        passwordclass.classList.remove('hidden');
    }
})