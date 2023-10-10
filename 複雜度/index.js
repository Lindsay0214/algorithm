function example(n) {
    let counter = 0
    for (let i = 0; i < 3 * n; i++) {  // 3n 次，3n 的 Hello
        // console.log("Hello")
        counter++
    }

    for (let i = 0; i <n; i++) {       // n 平方次，n 平方次的 Hello
        for (let j=0; j<n ; j++) {
            // console.log("Hello")
            counter++
        }
    }

    // console.log("Hello")
    // console.log("Hello")
    // console.log("Hello")
    // console.log("Hello")
    counter += 4               // 4 次的 Hello

    return counter
}

for (let i = 2; i < 10; i++) {
    console.log(example(i))
}

// example(n) => n^2 + 3n + 4
// f(n) = n^2 + 3n + 4
