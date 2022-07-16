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

// Email Check

let testing = function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

claimButton.addEventListener("click", function(e){
    e.preventDefault()
    generateError()
    addWarning()
})


function generateError(){
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
}

function addWarning(){
    for (let i = 0; i < 4; i++){
        let newWarning = document.createElement("h6")
        newWarning.classList.add("warning")
        if (allInputs[i].contains(fn) & (fn.value == "")){
            newWarning.classList.add("warning-firstName")
            newWarning.textContent = "First Name cannot be empty"
            fn.insertAdjacentElement("afterend", newWarning)
        }
    }
}

// <!-- <h6 class = "warning warning-firstname">First Name cannot be empty</h6> -->
