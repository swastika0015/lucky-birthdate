const birthDate = document.querySelector("#input-date");
const number = document.querySelector("#input-no")
const btnCheck = document.querySelector("#btn")
const message = document.querySelector("#error-msg")
let sum = 0;


btnCheck.addEventListener("click", function luckyBirthdate() {
    const date = birthDate.value
    if(date && number.value) {
        for(let i=0; i<date.length; i++){
            if( date[i] != "-"){
                sum = sum + parseInt(date[i])
            }
        }
        if (sum%number.value === 0){
            showMessage("Yayay! " + number.value + " is a lucky number!")
        }
        else{
            showMessage(number.value + " is not a lucky number :/")
        }
    }else {
        showMessage("Please enter both th fields")
    }

});

function showMessage(msg){
    message.style.display = "block"
    message.innerText = msg
}