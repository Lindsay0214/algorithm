### Linear Search (Sequential Search)
- 在一陣列中找某元素值，這演算法會一個一個檢查陣列中的元素直到找到符合或是全部找完完全找不到符合
- 是介紹的演算法中最簡單的
```
LINEAR-SEARCH(array, n):
    for i from 0 to array.length - 1
        if (array[i] == n):
        return i
    return -1
```

- Worst case performance: O(n)，要找的值剛好在陣列最後一個
- Best case performance: O(1)，要找的值剛好在陣列的第一個
- Average performance: O(n/2)
