// ++ (+= 1 )
// -- = -1 

const test = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(test);

// Only change code below this line
const myArray = [['Random'], ['Test']];
console.log(myArray[0][0]);

// Simlar to Python Syntax
// .push() == .append()
// .pop() stays the same. Returns value of removed element. 
// .shift() = first instead of last.
// .unshift() adds element to beginning (similar to .push())


// Normal ' == ' Evaluator converts value to common type
// Multiple Values can return true no matter the data type 
// EX. '10' and 10 will still be evaluated as True. 
// Synatxs calls for evaluation within parantasees 
function testing(i){

    if (i == 10){
        console.log("True")
    }
    else{
        console.log("False")
    }
}

// Strict Evaluator ' === ' 
// typeof returns data type of a specfici value
// Similar to str() or int() in Python. 
function dataTypes(){

    console.log(typeof(3))
    console.log(typeof('3'))
    console.log(typeof(true))
    console.log(typeof({}))
    console.log(typeof([]))

}

// dataTypes()
// Testing 

function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);