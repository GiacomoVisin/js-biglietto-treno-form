// initializing the global variables and function

const rate = 0.21
let finalPrice
finalPrice = rate * km

function generateNumberForCpCode() {
    return Math.floor(10000 + Math.random() * 90000);
}


function generateNumberForSeat() {
    return Math.floor(Math.random() * 10) + 1;
}



// initializing the global variables and function


// adding the node of the card and the form

const form = document.getElementById("cardForm")
let inputPassengerName = document.getElementById("name")
let CardPassengerName = document.getElementById("passengerName")
let inputPassengerAge = document.getElementById("age")
let CardSeat = document.getElementById("newSeat")
let CardCpCode = document.getElementById("newCpCode")

// starting the form
form.addEventListener(`submit`, function (e) {
    e.preventDefault()
    let cpCode = generateNumberForCpCode()
    let seat = generateNumberForSeat()
    let inputPassengerNameValue = inputPassengerName.value
    CardPassengerName.textContent = inputPassengerNameValue
    CardSeat.textContent = seat
    CardCpCode.textContent = cpCode
    form.reset()
})







































/* let form = document.getElementById(`form1`)
let input = document.getElementById(`firstinput`)
let card = document.getElementById(`nomeCard`)



form.addEventListener("submit", function(e){
    const inputValue = input.value
    e.preventDefault();
    card.textContent = inputValue
    form.reset()
})
 */