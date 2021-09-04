/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

const pivot = (arr=[], start=0, end=arr.length - 1) => {
    let pivotVal = arr[start]
    let swapIdx = start

    for (let i = start + 1; i <= end; i++) {
        if (pivotVal > arr[i]) {
            swapIdx++
            swap(swapIdx, i, arr)
        }
    }
    swap(start, swapIdx, arr)
    return swapIdx
}

const swap = (idx1, idx2, arr) => {
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}


/*
quickSort accepts an array, left index, and right index
*/

const quickSort = (arr=[], start=0, end=arr.length - 1) => {
    if (start < end) {
        let pivotIdx = pivot(arr, start, end)
        quickSort(arr, start, pivotIdx - 1)
        quickSort(arr, pivotIdx + 1, end)
    }
    return arr
}

module.exports = {pivot, quickSort};