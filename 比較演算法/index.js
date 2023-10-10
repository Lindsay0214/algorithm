// 1 + 2 + 3 + ... + n = sum

// solution one : for loop
function funOne (n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum
}

// solution two : arithmetic sequence
// https://www.youtube.com/watch?v=6eZNkA7RUMo
function funTwo (n) {
    return ((1+n) * n) / 2
}

let timeOne = window.performance.now()
funOne(10000000)

let timeTwo = window.performance.now()
let timeDiffOne = timeTwo - timeOne / 1000
console.log(`It takes ${timeDiffOne} seconds to run funOne`)

let timeThree = window.performance.now()
funTwo(10000000)
let timeFour = window.performance.now()
let timeDiffTwo = (timeFour - timeThree) / 1000
console.log(`It takes ${timeDiffTwo} seconds to run funTwo`)
