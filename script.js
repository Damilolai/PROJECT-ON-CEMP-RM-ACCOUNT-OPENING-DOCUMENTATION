let submitButton = document.getElementById("mySubmit")
let congratulations = document.getElementById("congrats")
let accountofficer = document.getElementById ("accountOfficer")



function dami(){
    congratulations.textContent = "Dear"+" " + accountofficer.value + "," + " "+ "your document has been submitted";
event.preventDefault();
}

submitButton.addEventListener("click",dami)
