const bubbleSort = (arr=[]) => {
    for (let i = 0; i < arr.length; i++) {
        let swapped = false
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(j, j + 1, arr)
                swapped = true
            }
        }
        if (!swapped) break
    }
    return arr
}

const swap = (idx1, idx2, arr) => {
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}

module.exports = bubbleSort;