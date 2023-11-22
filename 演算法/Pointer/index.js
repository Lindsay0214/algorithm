// average pair
// 透過給定的 sorted 得知，陣列第一個數加上最後一個數除以二一定會大於平均值，多次反覆執行最終找到
averagePair([-11, 0, 1, 2,3,49,14,17,21], 1.5)

// O(n)
function averagePair(arr, avg) {
    let left = 0
    let right = arr.length - 1
    let result = []

    while (right > left) {
        let tempAvg = (arr[right] + arr[left]) / 2
        if (tempAvg > avg) {
            right--
        } else if (tempAvg < avg) {
            left++
        } else if (tempAvg == avg) {
            result.push([arr[right], arr[left]])
            right--
            left++
        }
    }
    console.log(result)
    return result
}


// palindrome (從前面讀過去跟從後面讀回來都長一樣)
// ex. "tacocat"
palindrome("tacocat")
function palindrome (str) {
    let left = 0
    let right = str.length - 1

    while (left <= right) {
        if (str[left] == str[right]) {
            left++
            right--
        } else {
            console.log(false)
            return false
        }
    }
    console.log(true)
    return true
}

// Subsequence Problem, string <=> sub string
function isSubsequence(subString, string) {
    if (subString.length == 0 ) return true

    let subStringPointer = 0
    let stringPointer = 0

    while (stringPointer < string.length) {
        if (subString[subStringPointer] == string[stringPointer]) subStringPointer++
        if (subStringPointer >= subString.length) return true
        stringPointer++
    }

    return false
}

isSubsequence("hello", "hello Dear") // true
isSubsequence("book", "brooklyn") // true
isSubsequence("abc", "bac") // true

