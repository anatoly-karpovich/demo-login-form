//Login
const userName = document.querySelector("#userName")
const password = document.querySelector("#password")
const submit = document.querySelector("#submit")
const error = document.querySelector("#errorMessage")
const loginform = document.querySelector(".loginForm")
const registerOnLogin = document.querySelector("#registerOnLogin")
//Success
const back = document.querySelector("#backButton")
const success = document.querySelector("#successMessage")
const successForm = document.querySelector(".successMessage")
//Register
const registerForm = document.querySelector(".registerForm")
const backOnRegister = document.querySelector("#backOnRegister")
const errorOnRegister = document.querySelector("#errorMessageOnRegister")
const userNameOnRegister = document.querySelector("#userNameOnRegister")
const passwordOnRegister = document.querySelector("#passwordOnRegister")
const register = document.querySelector("#register")

submit.addEventListener('click', function(event) {
    let user = JSON.parse(localStorage.getItem(userName.value));
    if(!(userName.value).trim() && !(password.value).trim()) {
        error.textContent = 'Credentials are required'    
    } else if (!(userName.value).trim()) {
        error.textContent = 'Username is required'
    } else if (!(password.value).trim()) {
        error.textContent = 'Password is required'
    } else if(user && userName.value == user.name && password.value == user.password) {
        loginform.style.display = 'none'
        successForm.style.display = 'block'
        userName.value = ''
        password.value = ''
        success.textContent = `Hello, ${user.name}!`
    } else {
        error.textContent = 'Invalid credentials'
    }
    event.preventDefault(); 
})
function clearLoginForm() {
    userName.value = ''
    password.value = ''
    error.textContent=''
}
function clearRegisterForm() {
    userNameOnRegister.value=''
    passwordOnRegister.value=''
    errorOnRegister.textContent=''
}

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

registerOnLogin.addEventListener('click', (event) => {
    loginform.style.display = 'none'
    registerForm.style.display = 'block'
    clearLoginForm()
    event.preventDefault()
})

backOnRegister.addEventListener('click', (event) => {
    loginform.style.display = 'block'
    registerForm.style.display = 'none'
    clearRegisterForm()
    event.preventDefault()
})

userNameOnRegister.addEventListener('input', () => {
    errorOnRegister.textContent=''
})

passwordOnRegister.addEventListener('input', () => {
    errorOnRegister.textContent=''
})

passwordOnRegister.addEventListener('input', (event) => {

})

function usernameValidate(value) {
    value = value.trim()
    // console.log((JSON.parse(localStorage.getItem(userNameOnRegister.value))))
    if(!value) {
        return "Username is required"
    } else if(value.length < 3) {
        return "Username can't contain at least 3 characters"
    } else if(value.length> 40) {
        return "Username can't exceed 40 characters"
    } else if(localStorage.getItem(userNameOnRegister.value) && (value == (JSON.parse(localStorage.getItem(userNameOnRegister.value))).name)) {
        return "Username is in use"
    } else return 'valid'
}

function passwordValidate(value) {    
    if(!value.trim()) {
        return "Password is required"
    } else if(value.length < 8) {
        return "Password should contain at least 8 characters"
    } else if(value == value.toUpperCase()) {
        return "Password should contain at least one character in lower case"
    } else if(value == value.toLowerCase()) {
        return "Password should contain at least one character in upper case"
    } else if(value.length > 20) {
        return "Password can't exceed 20 characters"
    } else return 'valid'
}

register.addEventListener('click', (event) => {
    event.preventDefault()
    console.log(userNameOnRegister.value)
    if(usernameValidate(userNameOnRegister.value) != 'valid' && passwordValidate(passwordOnRegister.value) != 'valid') {
        errorOnRegister.textContent = 'Please, provide valid data'
    } else if(usernameValidate(userNameOnRegister.value) != 'valid') {
        errorOnRegister.textContent = usernameValidate(userNameOnRegister.value)
    } else if(passwordValidate(passwordOnRegister.value) != 'valid') {
        errorOnRegister.textContent = passwordValidate(passwordOnRegister.value)
    } else {        
        let user = {
            name: userNameOnRegister.value,
            password: passwordOnRegister.value
        }
        localStorage.setItem(`${userNameOnRegister.value}`, JSON.stringify(user))
        errorOnRegister.textContent = 'Successfully registered! Please, click Back to return on login page'
    }
    
})