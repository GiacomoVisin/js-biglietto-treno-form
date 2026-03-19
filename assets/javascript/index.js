// initializing the variables
const rate = 0.21

function generateNumberForSeat() {
  return Math.floor(10000 + Math.random() * 90000);
}
let carrozza =  generateNumberForSeat()



const form = document.getElementById("cardForm")
let inputPassengerName = document.getElementById("name")
let CardPassengerName = document.getElementById("passengerName")

// starting the form
form.addEventListener(`submit`, function(e){
    e.preventDefault()
    const inputPassengerNameValue = inputPassengerName.value
    CardPassengerName.textContent = inputPassengerNameValue
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