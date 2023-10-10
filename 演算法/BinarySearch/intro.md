### Binary Search
- 適用於排列好的陣列

```
BINARY-SEARCH(array, num):
    min = 0
    max = array.length - 1
    while min <= max:
        middle = (min + max) / 2
        if num > array[middle]:
            min = middle + 1
        else if num < array[middle]:
            max = middle - 1
        else
            return middle
    return -1
```

- Worst case performance: O(n)，要找的值剛好在陣列最後一個
- Best case performance: O(1)，要找的值剛好在陣列的第一個
- Average performance: O(n/2)
