//Question no 1 : Step 1: Create a blank array
var myWork = [];
// Step 2: Use a loop to create lessons
for (var i_1 = 1; i_1 <= 10; i_1++) {
    // Create an object representing a lesson
    var lesson = {
        name: "Lesson ".concat(i_1),
        status: i_1 % 2 === 1 // Alternates between true and false
    };
    // Step 3: Add the lesson to the array
    myWork.push(lesson);
}
// Step 4: Print the result
console.log(myWork);
//question no 2:Guessing Gmae using while loop (typescript)
var maxValue = 100;
var randomNumber = Math.floor(Math.random() * maxValue) + 1;
console.log("Random number:", randomNumber);
//track guess status
var correctGuess = false;
//predefined guesses
var guesses = [3, 7, 5, 1, 10];
//iterate over guesses
var i = 0;
while (!correctGuess && i < guesses.length) {
    var currentGuess = guesses[i];
    if (currentGuess === randomNumber) {
        console.log(correctGuess);
        correctGuess = true;
    }
    else if (currentGuess < randomNumber) {
        console.log("Too low!");
    }
    else {
        console.log("Too high!");
    }
    i++;
}
//question no 3: Counter Incrementer(Using do while loop)
var counter = 0;
//step variable
var step = 10;
do {
    console.log("Counter:", counter);
    counter += step;
} while (counter < 100);
//question no 4: // Exploring Object with for..in Loop (typescript)
// Step 1: Create a simple object with three items
var simpleObject = {
    item1: "clothes",
    item2: "shoes",
    item3: "glasses"
};
for (var obj in simpleObject)
    console.log("{Property:".concat(obj, ", value:").concat(simpleObject[obj]));
//question no 5 :Exploring Arrays with Loops(Using loop )
var myArray = [];
for (var i_2 = 0; i_2 <= 10; i_2++) {
    myArray.push(i_2);
}
console.log("myArray =", myArray);
for (var i_3 = 0; i_3 < myArray.length; i_3++) {
    console.log("index:".concat(i_3, ", value:").concat(myArray[i_3]));
}
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var value = myArray_1[_i];
    console.log("value:", value);
}
