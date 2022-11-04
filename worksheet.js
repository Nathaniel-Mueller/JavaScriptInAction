import {isIntInRange, checkIfEmptyStr} from './functions.js';


///////////// THIS PROJECT MUST BE RAN IN A LIVE SERVER TO PROPERLY IMPORT FUNCTIONS FROM functions.js ////////////////

"use strict";

/*
1. Days of the Week

    a. Create a variable called dayOfWeek and assign it a value of the string ‘Monday’.
    b. Log this variable to the console
    c. On the following line, change the value of dayOfWeek so that it has the value ‘Friday’.
    d. Log the statement ‘I can’t wait for Friday!” using the dayOfWeek variable
    e. Put down a breakpoint on the first line of your code in the browser and run your code with the debugger.

    Use the Step Into button to go from line to line. Hover your mouse over the dayOfWeek variable every place it is used
    to see its current value change from Monday to Friday before it is printed.

*/

let dayOfTheWeek = 'Monday'
console.log(dayOfTheWeek)
dayOfTheWeek = 'Friday'
console.log(`I can't wait for ${dayOfTheWeek}!`);

/*
2. User Input

    The JavaScript prompt() function is similar to input() in that its purpose is to capture user input from the browser:
    It will display a message popup with an input field inside the browser window. When called, the prompt() function will
    return whatever is typed in the terminal after the message is displayed, and save it to a variable.

    a. Create a variable called animalInput and set it equal to the prompt function call with the phrase 
        ‘What is your favorite animal?’

    b. Create another variable called colorInput and set it equal to the prompt function call with the phrase
        ‘What is your favorite color?’
    c. Combine these two variables within a string so you can print the phrase “I’ve never seen a <color> <animal>!

*/

let animalInput = prompt('What is your favorite animal?');
animalInput = checkIfEmptyStr(animalInput, 'What is your favorite animal?')
let colorInput = prompt('What is your favorite color?');
colorInput = checkIfEmptyStr(colorInput, 'What is your favorite color?')
console.log(`I've never seen a ${colorInput} ${animalInput}!`);

/*
1. Meals

    a. Create a variable called timeOfDay and give it the value 1300
    b. Below that variable, create another and this time you choose the name. This variable will end up holding the
        value of one of the meals you have previously chosen, but right now, you don’t know which it will hold!
            i. (What would be a good name to use for a variable that might end up with any of those three values?)
    c. Now create a conditional with three parts:

        i. if timeOfDay has a value of less than 1200, assign your own variable the value of the breakfast you chose.
        ii. If timeOfDay is between 1200 and 1700, assign your variable the value of the lunch you chose.
        iii. If timeOfDay is greater than 1700, assign your variable the value of the dinner you chose

    d. After these conditionals, print your variable to the console. What value do you expect it to show?
    e. Go back to the line where you created timeOfDay and change its value twice so that you are able to see the other
        two meals print when you run the code.
    f. Now try to ‘break’ this section of code by giving timeOfDay a value that will cause an error.
        Think about how the variable is being used and what types of values would not make sense to be used that way.
        Run the code again to see the error get thrown.
    g. After you have successfully caused this section of code to throw an error, place a breakpoint on the
        first line of code in the file and debug the program. Watch how it will run all previous code until it
        encounters the line where the error occurs.
*/

let timeOfDay = 'String';
let favMealByTime;
if (timeOfDay < 1200){
    favMealByTime = 'Omelette'
}
else if (timeOfDay > 1200 && timeOfDay< 1700){
    favMealByTime = 'Pizza'
}
else if (timeOfDay > 1700){
    favMealByTime = 'Chicken Alfredo'
};

console.log(favMealByTime)

/*
2. Random Number

    a. Declare a variable to store a random number between 0 and 10. You will need to do some research to determine how
        to generate a random number in JavaScript.
            a. A good search term to use: “random number JavaScript”
    b. If the number is between 0 and 2, print to the console “Beatles”
    c. If the number is between 3 and 5, print to the console “Stones”
    d. If the number is between 6 and 8, print to the console “Floyd”
    e. If the number is equal to 9 or 10, print to the console “Hendrix”
*/

let randInt = Math.floor(Math.random() * 10)

if (randInt > 0 && randInt <= 2){
    console.log('Beatles')
}
else if (randInt > 2 && randInt <= 5){
    console.log('Stones')
}
else if (randInt > 5 && randInt <= 8){
    console.log('Floyd')
}
else if (randInt > 8 && randInt <= 10){
    console.log('Hendrix')
}

/*
1. Write your own for loop that will display the message “JavaScript is cool!” 7 times.

2. Write your own for loop that will display the numbers 0-10, one number per loop. You will need to utilize a
    variable for this!

3. Write a for loop that will print the following sequence:
    hello
    goodbye
    hello
    goodbye
    hello
    goodbye
    hello
    goodbye
    hello
    goodbye
*/

for (let i = 0; i < 7; i++){
    console.log('JavaScript is cool!')
}

for (let i = 0; i <= 10; i++){
    console.log (i)
}

for (let i = 0; i < 5; i++){
    console.log('hello')
    console.log('goodbye')
}

/*
1. Favorite Movie (void functions)

    a. Create an appropriately named variable and assign it the value of the name of your favorite movie.
    b. On the next line, print this variable to the console. Run your code to test it out.
    c. Now, move the previous two lines of code you wrote into a function named ‘printMovieName’
    d. Run your code again (be sure to invoke your function!!)

2. Favorite Band (return functions)

    a. Write a function that asks a user to enter their favorite band
    b. On the next line, the function should return the user’s response
    c. When you call the function, save the returned result as a new variable.
    d. After the function is called, print the returned result.

3. Concert (parameters)

    a. Create a new function called concertDisplay. This function should have one parameter called musicalAct
    b. Inside the function, ask the user to enter the street they live on and save it as a variable called myStreet.
    c. Print a string that combines the variable that holds the user’s response along with the musicalAct parameter.
        The message should end up saying “It would be great if <musicalAct> played a show on <myStreet>!”
    d. Now when you call the concertDisplay function, pass in the variable that was returned from the Favorite Band section. 
*/

function printMovieName(){
    let favMovie = 'Tangled'
    console.log (favMovie)
}

printMovieName()

function getFavBand(){
    let favBand = prompt("What's the name of your favorite band?")
    favBand = checkIfEmptyStr(favBand, "What's the name of your favorite band?")
    return favBand
}

let userFavBand = getFavBand()
console.log(userFavBand)

function concertDisplay(musicalAct){
    let myStreet = prompt("What street do you live on?")
    myStreet = checkIfEmptyStr(myStreet, "What street do you live on?")
    console.log(`It would be great if ${musicalAct} played a show on ${myStreet}!`)
}

concertDisplay(userFavBand)

/*
1. Desktop Items

    a. Create a new variable called desktopItems. Establish this variable as an array by setting it equal to a pair of
        square brackets [].
    b. When creating an array literal like this, we can insert some initial values at the same time it is created:
        i. Between the brackets, add a few strings to describe three items you see around you (‘desk’, ‘lamp’, etc.)
            Make sure to separate the items with commas OUTSIDE the quote marks.
    c. What index values do these 3 items have?
    d. Print to the console the item that resides at index 1.
    e. On a new line, use the JavaScript array method that allows you to add new things to an existing array to add the
        string ‘Infinity Gauntlet’ to your desktopItems array.
    f. Now, utilize a for loop to iterate over your array and print out each item one at a time.
*/

let desktopItems = ['Microphone', 'Water Bottle', 'Monitor']
console.log(desktopItems[1])
desktopItems.push('Infinity Gauntlet')

for (let element of desktopItems){
    console.log(element)
}

/*
1. Create a variable called magicNumber and give it an initial value of 50
2. Create a variable called guess and give it an initial value of 0
3. Create a while loop that will allow a user to continue to input a guess until they correctly choose the magic number.
4. If the number guessed is lower than the magic number, it should print “Too low!”
5. If the number guessed is higher than the magic number, it should print “Too high!”
6. If the number is within 10 of the magic number in either direction, it should print the appropriate message and
    additionally print “Getting warmer!”
7. If the number is correctly guessed, instead of “Getting warmer!”, print the magic number along with a congratulations
    message and break the loop.
8. Once you have tested and determined it works, go back to the beginning and change magicNumber to be assigned a random
number between 0 and 100 instead of the hardcoded value.
9. Play your new guessing game a few times! Try to beat your own score
10. After playing a few times, put down a breakpoint at the start of the while loop and run it with the debugger. Hover
    over the magicNumber variable to see how much easier it is to determine the value of your variables by debugging this
    way! 
*/

let magicNumber = Math.floor(Math.random() * 100)
let guess = prompt("Choose a number 1 - 100!")
guess = isIntInRange(guess)
while (guess != magicNumber){
    if (guess < magicNumber){
        console.log("Too low!")
        checkIfClose(magicNumber, guess)
        guess = prompt("Choose another number 1 - 100!")
        guess = isIntInRange(guess)
    }
    else if (guess > magicNumber){
        console.log("Too High!")
        checkIfClose(magicNumber, guess)
        guess = prompt("Choose another number 1 - 100!")
        guess = isIntInRange(guess)
    }
    else if (guess == magicNumber){
        console.log(`Congratulations you guessed ${magicNumber}, the magic number!`)
    }
}

function checkIfClose(numInitial, numGuess){
    if (numInitial > numGuess){
        if (numInitial - numGuess <= 10){
            return console.log('Getting warmer!')
        }
    }
    else if (numInitial < numGuess){
        if (numGuess - numInitial <= 10){
            return console.log('Getting warmer!')
        }
    }
}