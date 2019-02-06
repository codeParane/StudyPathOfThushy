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
//periodically removing one letter from the end of the string and attaching it to the front
