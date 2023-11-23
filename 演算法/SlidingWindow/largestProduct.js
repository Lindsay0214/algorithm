function createDigitArray() {
    let array = [];
    for (let i = 0; i < 1000; i++) {
        array.push(i % 10);
    }
    return array;
}
function largestProduct (n) {
    let currentProduct
    let maxProduct = -Infinity
    let left = 0
    let right = n - 1

    const thousandDigits = createDigitArray()
    while (right < thousandDigits.length) {
        currentProduct = 1
        for(let i = left; i<= right; i++) {
            currentProduct *= thousandDigits[i]
        }
        if (currentProduct > maxProduct) {
            maxProduct = currentProduct
        }
        right++
        left++
    }
    console.log(maxProduct)
    return maxProduct
}
largestProduct(13)
