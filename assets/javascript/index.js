// initializing the global variables and function

const rate = 0.21


function generateNumberForCpCode() {
    return Math.floor(10000 + Math.random() * 90000);
}


function generateNumberForSeat() {
    return Math.floor(Math.random() * 10) + 1;
}






// initializing the global variables and function


// adding the node of the card and the form

const form = document.getElementById("cardForm")
const resetButton = document.getElementById("reset")
let inputPassengerName = document.getElementById("name")
let CardPassengerName = document.getElementById("passengerName")
let inputPassengerAge = document.getElementById("age")
let kmInput = document.getElementById("km")
// convert to number
let age = Number(inputPassengerAge.value)
let km = Number(kmInput.value)
// convert to number
let CardSeat = document.getElementById("newSeat")
let CardCpCode = document.getElementById("newCpCode")
let ticketPrice = document.getElementById("newPriceTicket")
let cardOffer = document.getElementById("newOffer")
let finalPrice


// starting the form
form.addEventListener(`submit`, function (e) {
    e.preventDefault()
    finalPrice = rate * kmInput.value
      // discount condition
    if (inputPassengerAge.value < 18) {
        finalPrice = finalPrice * 0.8
        cardOffer.textContent = "Biglietto scontato"
    } 
    else if (inputPassengerAge.value > 65) {
        finalPrice = finalPrice * 0.6
           cardOffer.textContent = "Biglietto scontato"
    }
     else {
        cardOffer.textContent = "Biglietto standard"
    }

    let cpCode = generateNumberForCpCode()
    let seat = generateNumberForSeat()
    let inputPassengerNameValue = inputPassengerName.value
    CardPassengerName.textContent = inputPassengerNameValue
    CardSeat.textContent = seat
    CardCpCode.textContent = cpCode
    ticketPrice.textContent = finalPrice.toFixed(2) + `€`
    form.reset()
})


resetButton.addEventListener('click', function() {
    CardPassengerName.textContent = ""
    CardSeat.textContent = ""
    CardCpCode.textContent = ""
    ticketPrice.textContent = ""
    cardOffer.textContent = ""
})

































