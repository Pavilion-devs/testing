// Data type in javascript
//1. primitive data types = number, string, boolean , bigint, null, undefined
// let, const, var -< keyword

// let a = 10;

 // assigning a value(number) to a variable

// initialize the count as zero
//listen for clicks on increment button
//increment the count variable when the button is clicked
//change the count-el in the HTML to reflect 

// let countEl = document.getElementById("el-count")
// let saveEl = document.getElementById("save-el")
// console.log(countEl)
// let count = 0
// function increment(){
//     count += 1
//     countEl.innerText = count
//     console.log(count)
// }
// increment()

// function save(){
//     let monitor = count + " - " 
//     saveEl.innerText += monitor
//     console.log(count)
// }
// save()

// let num1 = 8
// let num2 =  3

// document.getElementById("num1-el").textContent = num1 
// document.getElementById("num2-el").textContent = num2 
// let sum = document.getElementById("sum")
// function add(){
//     result = num1 + num2
//     sum.innerText = "Sum: " + result
// }
// add()
// function substract(){
//     result = num1 - num2
//     sum.innerText ="Substraction: " +  result
// }
// substract()
// function multiply(){
//     result = num1 * num2
//     sum.innerText = "Multiplication: " + result
// }
// multiply()
// function divide(){
//     result = num1 / num2
//     sum.innerText = "Division: " +  result
// }
// divide()

let player = {
    Name: "Per: ",
    Chip: 145
} 

let blackJack = false
let is_Alive = false
let Cards = []
let sum = 0
let message = ""
let messageEl= document.querySelector("#message-el")
let sumEl= document.querySelector("#sum-el")
let cardsEl= document.querySelector("#cards-el")


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.Name + ": $ " + player.Chip

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10){
        return 10
    } else if (randomNumber === 1) {
        return 11
    }
    else{
        return randomNumber
    }
}
function startGame() {
    is_Alive = true
    let FirstCard = getRandomCard()
    let LastCard = getRandomCard()
    Cards = [FirstCard, LastCard]
    sum = FirstCard + LastCard
    renderGame()
}


function renderGame(){
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < Cards.length; i++){
        cardsEl.textContent =  cardsEl.textContent + Cards[i] + " "
    }
    sumEl.textContent = "Sum " + sum
    if (sum <= 20){
        message = "Do you want to draw another card? 🙂 "
    } else if (sum === 21) {
        message = "Woohoo! You've got a blackjack 🎈"
        blackJack = true
    } else {
        message = "You are out of the game! 😭"
        is_Alive = false
    }
    messageEl.textContent = message
}
function newCard(){
    if (is_Alive === true && blackJack === false){
    let Card = getRandomCard()
    sum += Card
    Cards.push(Card)
    renderGame()
    }
}

