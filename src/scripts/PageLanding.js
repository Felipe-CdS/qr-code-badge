import '../css/pageLanding.css';

var entries = {
    firstName: "",
    lastName: "",
    email: "",
    twitter: "",
    github: ""
}

function getEntries(){
    entries.firstName = document.getElementById("fname").value;
    entries.lastName = document.getElementById("lname").value;
    entries.email = document.getElementById("email").value;
    entries.twitter = document.getElementById("twitter").value;
    entries.github = document.getElementById("github").value;
}

function checkButton(){
    if(document.getElementById("fname").value.length != 0 && 
        document.getElementById("lname").value.length != 0 && 
        document.getElementById("email").value.length != 0 &&
        validateEmail() == true){
        
        document.getElementById("submit-button").removeAttribute("disabled");
    }
    else{ 
        document.getElementById("submit-button").setAttribute("disabled", true);
    }
}

function validateEmail(){
    var regex = /^\S+@\S+\.\S+$/;
    var emailEntry = document.getElementById("email").value;

    if(regex.test(emailEntry)){
        document.getElementById("email-error").style.visibility = "hidden";
        return true;
    }
    else{
        document.getElementById("email-error").style.visibility = "visible";
        return false;
    }
}

function clearEverything(){
    entries.firstName = document.getElementById("fname").value = "";
    entries.lastName = document.getElementById("lname").value = "";
    entries.email = document.getElementById("email").value = "";
    entries.twitter = document.getElementById("twitter").value = "";
    entries.github = document.getElementById("github").value = "";
    document.getElementById("submit-button").setAttribute("disabled", true);
}

document.getElementById("fname").addEventListener("change", checkButton);
document.getElementById("lname").addEventListener("change", checkButton);
document.getElementById("email").addEventListener("change", checkButton);

document.getElementById("email").addEventListener("change", validateEmail);

document.getElementById("entries-form").addEventListener("submit", getEntries);
document.getElementById("cancel-button").addEventListener("click", clearEverything);
document.getElementById("submit-button").setAttribute("disabled", true);