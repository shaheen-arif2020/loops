 //Question no 1 : Step 1: Create a blank array
let myWork: {name: string, status: boolean}[] = [];

// Step 2: Use a loop to create lessons
for (let i = 1; i <= 10; i++) {
    // Create an object representing a lesson
    let lesson = {
        name: `Lesson ${i}`,
        status: i % 2 === 1 // Alternates between true and false
    };

    // Step 3: Add the lesson to the array
    myWork.push(lesson);
}

// Step 4: Print the result
console.log(myWork);
 //question no 2:Guessing Gmae using while loop (typescript)
let maxValue:number=100;
let randomNumber:number=Math.floor(Math.random()*maxValue) + 1;
console.log("Random number:",randomNumber);
//track guess status
let correctGuess=false;
//predefined guesses
let guesses=[3,7,5,1,10];
//iterate over guesses
let i=0;
while(!correctGuess && i<guesses.length){
    let currentGuess =guesses[i];
    if(currentGuess === randomNumber){
        console.log(correctGuess!);
        correctGuess= true;
    }else if (currentGuess <randomNumber){
        console.log("Too low!");
    }else{
        console.log("Too high!");
    }
    i++;
}
//question no 3: Counter Incrementer(Using do while loop)
let counter=0;
//step variable
let step=10;
do{
console.log("Counter:",counter);
counter +=step;
}while (counter< 100)
//question no 4: // Exploring Object with for..in Loop (typescript)
// Step 1: Create a simple object with three items
let simpleObject:any = {
    item1:"clothes",
    item2:"shoes",
    item3:"glasses"
}

for(let obj in simpleObject)
    console.log(`{Property:${obj}, value:${simpleObject[obj]}`)

//question no 5 :Exploring Arrays with Loops(Using loop )

let myArray:number[] = []
for(let i =0; i<=10; i++){
  myArray.push(i)  
}

console.log("myArray =",myArray)

for(let i =0; i<myArray.length; i++){
    console.log(`index:${i}, value:${myArray[i]}`)
}

for(let value of myArray){
    console.log("value:",value)
}
