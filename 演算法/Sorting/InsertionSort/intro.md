- Insertion sort is a little bit more efficient than bubble sort in practice. Theoretically, they have the same Big O value.
- The principle of insertion sort is simple. Keeping inserting a new value into a sorted array. Insert it to the correct spot so the sorted array remains sorted.

```
INSERTION-SORT(A):
 for j from index 1 to A.length - 1 (inclusive):
    key = A[j]
    i = j-1
    while i >= 0 and A[i] > key:
        A[i+1] = A[i]
        i = i-1
    A[i+1] = key
```

### Overview
- Worst Case Performance: O(n^2)
- Best Case Performance: O(n)
- Average Performance: O(n^2)
