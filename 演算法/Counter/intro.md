### Counter
- 透過 Counter Object (記分板) 降低演算法複雜度

> Intersection Problem
> 
write a function that takes two arrays as parameters, and then return an array that is the intersection of these two arrays.
for example, intersection ([1,2,3], [5,16,1,3]) should return [1,3]
```
function intersection(arr1, arr2) {
let result = []
for (i=0; i < arr1.length; i++) {
for (j=0; j < arr2.length; j++) {
if (arr1[i] == arr2[j]) result.push(arr1[i])
}
}
return result
}
console.log(intersection([1,2,3], [5,16,1,3]))

// O(n^2)
```
參考 index.js，透過 counter 方法複雜度會降低至 O(n)

> note: for...in...

`for in` 跟 `Array.prototype.forEach` 很像，但它可以針對物件或陣列來使用
