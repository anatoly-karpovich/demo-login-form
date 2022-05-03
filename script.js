const userName = document.querySelector("#userName")
const password = document.querySelector("#password")
const submit = document.querySelector("#submit")
const error = document.querySelector("#errorMessage")
const back = document.querySelector("#backButton")
const success = document.querySelector("#successMessage")
const loginform = document.querySelector(".loginForm")
const successForm = document.querySelector(".successMessage")

const credentials = {
    username: 'hiqo',
    password: 'hiqo'
}

submit.addEventListener('click', function(event) {
    if(!(userName.value).trim() && !(password.value).trim()) {
        error.textContent = 'Credentials are required'    
    } else if (!(userName.value).trim()) {
        error.textContent = 'Username is required'
    } else if (!(password.value).trim()) {
        error.textContent = 'Password is required'
    } else if(userName.value == credentials.username && password.value == credentials.password) {
        loginform.style.display = 'none'
        successForm.style.display = 'block'
        userName.value = ''
        password.value = ''
    } else if(userName.value != credentials.username || password.value != credentials.password) {
        error.textContent = 'Invalid credentials'
    }
    event.preventDefault(); 
})


back.addEventListener('click', (event) => {
    loginform.style.display = 'block'
    successForm.style.display = 'none'
    event.preventDefault(); 

})

userName.addEventListener('input', () => {
    error.textContent=''
})

password.addEventListener('input', () => {
    error.textContent=''
})