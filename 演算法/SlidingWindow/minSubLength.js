// Min Subarray Length
// Write a function called minSubLength accepts two parameters, an array of positive integers and a positive integer.
// This function should return the minimal length of a continuous subarray - the sum of elements inside this subarray has to be greater than or equal to the positive integer parameter.
// If subarray not found, then return 0
function minSubLength (arr, sum) {
    let minLength = Infinity
    let left = 0
    let right = 0
    let currentSum = 0

    while (right < arr.length) {
        currentSum += arr[right]
        while (currentSum >= sum) {
            if (minLength > right - left + 1) minLength = right - left + 1
            currentSum -= arr[left]
            left++
        }
        right++
    }

    if (minLength == Infinity) return 0
    return minLength
}
minSubLength([9, 8, 1, 4, 9, 5, 1, 2], 11) // 2
