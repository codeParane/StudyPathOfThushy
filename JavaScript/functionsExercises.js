// Write a JavaScript function that reverse a number. Example x = 32243, Expected Output : 34223	
function reverse_a_number(n)
{
	n = n.toString();
	return n.split("").reverse().join("");
}
console.log(reverse_a_number(32243));

// Write a JavaScript function that accepts two arguments, a string and a letter and the function 
//will count the number of occurrences of the specified letter within the string

//"APPLE", "P" > 2
function findOccur(str, spCh){
    var count = 0;
    for(var i=0;i<str.length;i++){
       if(str[i] == spCh){
           count += 1;
       }
    }
    return count;
}


//Write a JavaScript program to pass a 'JavaScript function' as parameter.
function paraFunc(){
    return 10;
}

function passFunc(aa){
    return aa* 2;
}

console.log(passFunc(paraFunc()));

//Write a JavaScript function to find the first not repeated character.
// a b c a b c c a d e a  z e => d

function findNonRepeater(str){
    for(var i=0;i<str.length;i++){
        for(j=i;j<str.length;j++){
            if(str[i] == str[j]){
                return;
            }
        }
    }
}









