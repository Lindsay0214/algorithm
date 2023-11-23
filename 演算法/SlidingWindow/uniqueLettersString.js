// Unique Letter String
// Write a function called uniqueLettersString, which accepts a string and returns the length of the longest substring with all distinct characters.
function uniqueLettersString (str) {
    let start = 0
    let end = 0
    let counter = {}
    let maxLength = -Infinity

    while (end < str.length) {
        if (counter[str[end]]) {
            counter[str[start]]--
            start++
        } else {
            counter[str[end]] = 1
            end++
            if (end - start > maxLength) {
                maxLength = end - start
            }
        }
    }

    if (maxLength == -Infinity) {
        console.log("can not find")
        return null
    }
    console.log(maxLength)
    return maxLength
}

uniqueLettersString("thisishowwedoit")
