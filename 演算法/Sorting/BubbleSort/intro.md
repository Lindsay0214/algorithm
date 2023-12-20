### Bubble sort
- Bubble sort compares adjacent elements and swaps them if they are in the wrong order.
- This simple algorithm performs poorly in real world use and is used primarily as an educational tool. More efficient algorithms such as quicksort, or merge sort are used by the sorting libraries built into popular programming languages such as Python and Java.

```
BUBBLE-SORT(A):
    for i from 0 to A.length-2 (inclusive):
        for j from A.length-1 to i+1 (inclusive):
            if A[j] < A[j-1]:
                exchange A[j] with A[j-1]
```

### Overview
- Worst Case Performance: O(n^2)
- Best Case Performance: O(n)
- Average Performance: O(n^2)

