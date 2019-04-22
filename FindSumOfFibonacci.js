//Input 5
//Find a Fibonacci
//print the sum of fibonacci numbers



function fib(number) {
    var fibNum = number
    var sum = 0

for(var i = 0 ; i < number; i++) {

    console.log(fibNum)
    sum += fibNum
    fibNum--

}
console.log(sum)
}

fib(4)



