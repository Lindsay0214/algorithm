function bubbleSort(arr) {
    let step = 0
    for (let i = 0; i <= arr.length - 2; i++) {
        for (let j = arr.length - 1; j >= i + 1; j--) {
            if (arr[j] < arr[j-1]) {
                let temp = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = temp

                step++
            }
        }
    }
    // console.log(step)
    // console.log(arr)
}
bubbleSort([4, 1, 5, 2, 7])

let test = []
for (let i = 0; i < 100; i++) {
    test.push(Math.floor(Math.random() * 100))
}
bubbleSort(test)
