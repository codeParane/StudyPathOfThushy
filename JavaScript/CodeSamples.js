// document.write("hello world!");

// document.write("2019 is Leap : " + isLeap(2019));
function isLeap(year){
    if(year  % 4 == 0 || year % 100 == 0){
        return true;
    }else
        return false;
}

// reverseString("abcd");
function reverseString(str){
    for(i=0;i<str.length;i++){
        document.write(str[str.length -1 - i] + " ")
    };
}

// document.write(is15(30,23));
function is15(num1, num2){
  if(num1 == 15 || num2 == 15 || (num1 + num2)==15 || (num1 - num2) == 15){
    return true;
  }
  return false;
}

// document.write(last3Cut("ABCD"));
function last3Cut(str){
  if(str.length >= 3){
    var tmp = str.substring(str.length-3, 4);
    tmp = tmp + str.substring(0, str.length-3);
    return tmp;
  }
}

// document.write(splitJoin(str1, str2));
function splitJoin(str1, str2){
  return (str1.substring(1, str1.length) + str2.substring(1, str2.length));
  
}

//Write a JavaScript program to rotate the string 'w3resource' in right direction by 
//periodically removing one letter from the end of the string and attaching it to the front.
var str = "w3resource";
var rStr="";

for(var i=str.length-1;i>=0;i--){
  rStr+=str[i];
}
console.log(rStr);

// Write a JavaScript program where the program takes a random integer between 1 to 10, the user is 
// then prompted to input a guess number. If the user input matches with guess number, the program will 
// display a message "Good Work" otherwise display a message "Not matched".  
var randomNumber = Math.floor(Math.random()*10);
var userInput = prompt("Enter Some Value");

if(randomNumber == userInput)
  console.log("Good Work");
else
  console.log("Not Matched");

// Write a JavaScript program to check if a string "Script" presents at 5th (index 4) position in a given string,
// if "Script" presents in the string return the string without "Script" otherwise return the original one. 
var str1 = "Hi_this_is_string";
var str = "Hi_oscripts_string";
var strN="";

if(str1.substring(4,10)=="script"){
  strN += str1.substring(0,4);
  strN += str1.substring(10);
}else{
  strN = str1;
}

console.log(strN);



