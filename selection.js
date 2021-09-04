const selectionSort = (arr=[]) => {
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j
        }
        if (min != i) {
            swap(min, i, arr)
        }
    }
    return arr
}

const swap = (idx1, idx2, arr) => {
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}

module.exports = selectionSort;