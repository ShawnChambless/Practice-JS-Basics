//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  //Code Here

var inner = outer();

//Once you do that, invoke inner.

  //Code Here

  inner();


//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //Code Here

var newCallFriend = callFriend();
newCallFriend('435-215-9248');

//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

  //Code Here

  var makeCounter = function() {

      var num = 0;
      var addOne = function() {
          return ++num;
      }
      return addOne;
  }


  var count = makeCounter();
  count(); // 1
  count(); // 2
  count(); // 3
  count(); // 4



//Next Problem



/*
  Write a function that accepts another function as it's first argument and returns a new function
  (which invokes the original function that was passed in) that can only ever be executed once.
*/

  //Code Here

var inception = function(argFn) {

    return function() {
        argFn();
    }
}

var innerFn = function() {
    console.log("worked")
}
var newInception = inception(innerFn);
newInception();
//Next Problem



/*
  Now, similar to the last problem, write a function called 'fnCounter' that accepts two parameters. The first
  parameter will be an anonymous function and the second parameter, 'N', will be a number.
  Now, in 'fnCounter', allow the anonymous function to be invoked 'N' number of times. After it's been
  invoked 'N' number of times, return 'STOP'.
*/

//code here



//Next Problem



/*
  var counter = function(){
    for (var i=1; i<=5; i++) {
      setTimeout( function timer(){
          console.log( i );
      }, i*1000 );
    }
  };

  Above you have a function named counter. Examine the function (without running the code) then
  below write what you expect to happen when the funciton is invoked. *Hint: setTimeout calls a function
  or evaluates an expression after a specified number of milliseconds.

    //Answer Here

    // counter will log '5' 5 times each time delaying 1 second from the last.

  Now, run the function in your console and note what happpens.

  Was your answer right or wrong?

    //Answer Here

    // Wrong. It logged 6 all 5 times 1 second from the last.

  Fix the counter function so that it works the way you expect it to work. (logging 1 then 2 then 3, etc)
*/

    //Code Here
    var counter = function(){
      for (var i = 1; i <= 5; i++) {
        setTimeout( function timer(){
            console.log( i );
        }, i*1000 );
      }
    };
counter();

//Next Problem



/*
  Make the following code work
var function() {

  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

  *Hint: Don't let this fool you. Break down what's really happening here.
*/
