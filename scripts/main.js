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
    console.log("checking");
    if(document.getElementById("fname").value.length != 0 && 
        document.getElementById("lname").value.length != 0 && 
        document.getElementById("email").value.length != 0){

        console.log("check");
        document.getElementById("submit-button").removeAttribute("disabled");
    }
    else{ 
        document.getElementById("submit-button").setAttribute("disabled", true);
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

document.getElementById("entries-form").addEventListener("submit", getEntries);
document.getElementById("cancel-button").addEventListener("click", clearEverything);
document.getElementById("submit-button").setAttribute("disabled", true);