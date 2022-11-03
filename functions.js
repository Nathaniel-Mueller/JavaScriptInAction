function isInt(num){
    let checkInput = parseInt(num)
    while (isNaN(checkInput)){
        checkInput = prompt("I'm sorry, that wasn't a whole number, please try again!")
        checkInput = isIntInRange(checkInput)
    }
    return checkInput
}

function isIntInRange(num){
    let rangeStart = 1
    let rangeEnd = 100
    num = isInt(num)
    while (num > rangeEnd || num < rangeStart){
        num = prompt('Sorry, that number is out of range. please try again!')
        num = isInt(num)
    }
    return num
}

function checkIfEmptyStr(userInput, userPrompt){
    userInput = userInput.trim()
    while (userInput.length === 0){
        alert("You have to type something!")
        userInput = prompt(userPrompt).trim()
    }
    return userInput
}

export {isIntInRange, checkIfEmptyStr};