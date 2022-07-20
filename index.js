// Icon Error

let errorFirstName = document.querySelector(".error-firstname")
let errorSecondName = document.querySelector(".error-lastname")
let errorEmail = document.querySelector(".error-email")
let errorPw = document.querySelector(".error-password")

// Warning Notice

let warningFn = document.querySelector(".warning-firstname")
let warningLn = document.querySelector(".warning-lastname")
let warningEmail = document.querySelector(".warning-email")
let warningPw = document.querySelector(".warning-password")

// Input Containers

let allInputs = document.querySelectorAll(".form-width")

let fn = document.querySelector(".fn")
let ln = document.querySelector(".ln")
let email = document.querySelector(".email")
let pw = document.querySelector(".pw")


// Button

let claimButton = document.querySelector("#claim-button")


claimButton.addEventListener("click", function(e){
    e.preventDefault()
    generateError()
    addFirstWarning()
    addLastWarning()
    addPwWarning()
    addEmailWarning()
})

let mistake = false

function generateError(){
    if (!mistake){
    for (let i = 0; i < 4; i++){
        let error = document.createElement("img")
        error.src = "icon-error.svg"
        error.classList.add("error")
        error.classList.add("original")
        if (allInputs[i].contains(fn) & (fn.value == "")){
            error.classList.add("error-firstname")
            fn.insertAdjacentElement("afterend", error)
            allInputs[i].style.outlineColor = "red"
        }
        else if (allInputs[i].contains(ln) & (ln.value == "")){
            error.classList.add("error-lastname")
            ln.insertAdjacentElement("afterend", error)
            allInputs[i].style.outlineColor = "red"
        }
        else if (allInputs[i].contains(pw) & (pw.value == "")){
            error.classList.add("error-password")
            pw.insertAdjacentElement("afterend", error)
            allInputs[i].style.outlineColor = "red"
        }
        else if (allInputs[i].contains(email) & (!testing(email.value))){
            error.classList.add("error-password")
            email.insertAdjacentElement("afterend", error)
            allInputs[i].style.outlineColor = "red"
        }
    }
    mistake = true
}
}

let firstWarn = false

function addFirstWarning(){
    if (!firstWarn){
    for (let i = 0; i < 4; i++){
        let newWarning = document.createElement("h6")
        newWarning.classList.add("warning")
        if (allInputs[i].contains(fn) & (fn.value == "")){
            newWarning.classList.add("warning-firstName")
            newWarning.textContent = "First Name cannot be empty"
            fn.insertAdjacentElement("afterend", newWarning)
        }
    }
    firstWarn = true
}
}

let lastWarn = false

function addLastWarning(){
    if (!lastWarn){
    for (let i = 0; i < 4; i++){
        let newWarning = document.createElement("h6")
        newWarning.classList.add("warning")
        if (allInputs[i].contains(ln) & (ln.value == "")){
            newWarning.classList.add("warning-lastName")
            newWarning.textContent = "Last Name cannot be empty"
            ln.insertAdjacentElement("afterend", newWarning)
        }
    }
    lastWarn = true
}
}

let pwWarn = false

function addPwWarning(){
    if (!pwWarn){
    for (let i = 0; i < 4; i++){
        let newWarning = document.createElement("h6")
        newWarning.classList.add("warning")
        if (allInputs[i].contains(ln) & (pw.value == "")){
            newWarning.classList.add("warning-password")
            newWarning.textContent = "Password cannot be empty"
            pw.insertAdjacentElement("afterend", newWarning)
        }
    }
    pwWarn = true
}
}

// Email Check

let testing = function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

let emailWarning = false

function addEmailWarning(){
    if (!emailWarning){
    for (let i = 0; i < 4; i++){
        let newWarning = document.createElement("h6")
        newWarning.classList.add("warning")
        if (allInputs[i].contains(email) & !testing(email.value)){
            newWarning.classList.add("warning-password")
            newWarning.textContent = "Looks like this is not an email"
            email.insertAdjacentElement("afterend", newWarning)
        }
    }
    emailWarning = true
}
}

