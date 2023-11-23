// 費氏數列
function fibonacciSequence (n) {
    if (n == 0) {
        return 0
    } else if (n == 1) {
        return 1
    } else {
        return fibonacciSequence(n - 1) + fibonacciSequence(n - 2)
    }
}

for(let i = 0; i < 10; i++) {
    console.log(fibonacciSequence(i))
}
