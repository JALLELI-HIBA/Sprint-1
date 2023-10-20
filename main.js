// Variables:

// Problem: Write a JavaScript function that declares a variable using var and returns its value.
  function declareVariable () {
    var x = 10
    return x
  }
// Problem: Create a function that takes two arguments and checks if they are equal. Return true if they are and false if they are not.
  function  equal(n1,n2) {
     if (n1 === n2) {
        return true 
     }
     else if ( n1 !== n2) {
        return false 
     }
  }

// Problem: Implement a function that declares a "constant" variable using var (even though var variables are not constant) and attempts to reassign it. Handle any resulting errors.
 function declareConst() {
    var x = 10 
    return x = 20
 }

// Problem: Create a function that defines a variable using var within its scope. Try to access the variable outside of the function and explain the result.
function variable (){
    var x = "hello"
    return x
}
// we can't access to it cause it's within a local scope 


// Problem: Write a function that takes a variable as an argument and returns its data type.
function variable2 (variable) {
   return typeof variable
}

// Conditional Statements:

// Problem: Create a function that takes an age as an argument and returns a message based on whether the person is a child, a teenager, an adult, or a senior citizen.
function ages (age) {
    if (age< 10){
        return 'child'
    }
    else if (age<20){
   return 'teen'
    }
    else if (age<40 ){
        return 'adult'
    }
    else { return 'senior citizen'}
}

// Problem: Write a function that checks if a given number is even or odd and returns an appropriate message.
function evenOdd (number){
    if(number%2===0){
        return "even"
    } 
    else if (number%2===1){
        return "odd"
    }
}

// Problem: Create a function that simulates a basic login system. It takes a username and password as arguments and returns true if  "Login successful" if they match, or false if  "Login failed" if they don't.
function loginSystem (username,)
// Problem: Write a function that calculates the grade for a given test score. The function should return "A," "B," "C," "D," or "F" based on the score.

// Problem: Create a function that takes a day of the week as an argument and returns whether it's a weekday or a weekend day.
