
///////////// THIS PROJECT MUST BE RAN IN A LIVE SERVER TO PROPERLY IMPORT FUNCTIONS FROM functions.js ////////////////


function isInt(num){  // Checks if user input is an integer
    let checkInput = parseInt(num)
    while (isNaN(checkInput)){
        checkInput = prompt("I'm sorry, that wasn't a whole number, please try again!")
        checkInput = isIntInRange(checkInput) // This keeps the integer in range to prevent returning an out of range number
    }
    return checkInput
}

function isIntInRange(num){  // Checks if passed in integer is in range (1-100)
    let rangeStart = 1
    let rangeEnd = 100
    num = isInt(num)
    while (num > rangeEnd || num < rangeStart){
        num = prompt('Sorry, that number is out of range. please try again!')
        num = isInt(num)
    }
    return num
}

function checkIfEmptyStr(userInput, userPrompt){  // Makes sure passed in string isn't empty. Alerts and reprompts if empty
    userInput = userInput.trim()
    while (userInput.length === 0){
        alert("You have to type something!")
        userInput = prompt(userPrompt).trim()
    }
    return userInput
}

export {isIntInRange, checkIfEmptyStr};