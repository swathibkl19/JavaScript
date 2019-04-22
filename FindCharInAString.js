//Find a Char in a String
//In "BankOfAmerica" find "O"


var givenString = "Hello"
var flag = false;


function findChar(char) {
    for (var i = 0; i < givenString.length; i++) {
        if (givenString.charAt(i) == char) {
            flag = true;
        }
    }
    if (flag == true) {
        console.log("the char found")
    } else {
        console.log("the char not found")
    }
}

findChar('e')

