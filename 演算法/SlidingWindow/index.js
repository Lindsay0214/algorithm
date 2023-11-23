// Max and Min Sum
// write two function that calculate the max and min sum of n consecutive numbers in an array.
// minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3) -> -28

// solution
function maxSum(arr, size) {
    let max_value = -Infinity

    if (size > arr.length) return null

    for (let i = 0; i <= arr.length - size; i++) {
        let attemp = 0
        for (let j  = i; j < i + size; j++) {
            attemp += arr[j]
        }
        if (attemp > max_value) max_value = attemp
    }
    return max_value
}
maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3) // 12

// better solution
function maxSumSecond(arr, size) {
    if (size < arr.length) return null

    let maxValue = 0
    for (let i = 0; i < size; i++) {
        maxValue += arr[i]
    }

    let temValue = maxValue
    for (let j = size; j < arr.length; j++) {
        temValue = temValue + arr[j] - arr[j - size]
        if (temValue > maxValue) maxValue = temValue
    }
    return maxValue
}
maxSumSecond([2, 7, 3, 0, 6, 1, -5, -12, -11], 3) // 12

