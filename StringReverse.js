//Reverse a String
// input   "BankOfAmerica" output :


var givenString  = "Bank Of America"

function revString(givenString) {
    var outputString ="";

    for(var i =givenString.length-1 ; i >= 0; i--){

        outputString += givenString[i]
    }
    console.log(outputString)
}
revString(givenString)
