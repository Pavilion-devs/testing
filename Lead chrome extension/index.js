// Data type in javascript
//1. primitive data types = number, string, boolean , bigint, null, undefined
// let, const, var -< keyword

// let a = 10;

// let hands = ["Rock", "Paper", "Scissors"]

// function getHands(){
//     let randomindex = Math.floor(Math.random() * 3)
//     return hands[randomindex]
// }
// console.log(getHands())

// let fruits = ["Messi", "Ronaldo", "Messi", "Ronaldo", "Messi"]
// let appleshelf = document.getElementById("apple-shelf")
// let orangeshelf = document.getElementById("orange-shelf")

// function sortfruits(){
//     for (let i = 0; i < fruits.length; i++){
//         if (fruits[i] === "Messi"){
//             appleshelf.textContent += "Messi"
//         }
//         else if (fruits[i] === "Ronaldo"){
//             orangeshelf.textContent += "Ronaldo"
//         }
//     }
// }
// sortfruits()

let myLeads = []
const inputBtn = document.getElementById("input-btn")
const message = document.getElementById("message")
const listitem = document.getElementById("listitem")

inputBtn.addEventListener("click", function(){
    var x = document.getElementById("message").value;
    myLeads.push(x) 
    message.value = "";
    renderLeads()
})

let items = ""
function renderLeads(){
for (let i = 0; i < myLeads.length; i++){
    items = `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                 ${myLeads[i]}
                 </a>
            <li>`;
    // myLeads.push(items)
    // console.log(items)
    // listitem.innerHTML += "<li>" + myLeads[i] + "</li>"
}
listitem.innerHTML += items
}
