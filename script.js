console.log("Hello World");
let user = prompt("Rock paper scissors!");
const choices = {rock: 0, paper: 1, scissors: 2};
let userChoice = choices[user];
let aiChoice = Math.floor(Math.random() * 2);
console.log(user);