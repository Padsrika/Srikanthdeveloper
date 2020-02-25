var RandomNumber=Math.floor(Math.random() * 21)
console.log(RandomNumber)

var userInput=prompt("please enter a number between 0-20")
if(RandomNumber==userInput)
alert("user win and number was "+RandomNumber)
else
alert("user loose number was "+RandomNumber)