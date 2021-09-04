const insertionSort = (arr=[]) => {
    let size = arr.length
    for (let i = 1; i < size; i++) {
        /**
         * 
         *  i = index 1: 1
         *  j = index 0: 100
         *  while j is not negative, and arr[i] < arr[j]
         *  spot ahead of arr[j] gets arr[j]'s value
         *  j is decremented
         */
        let current = arr[i]
        let j = i - 1
        while ((j > -1) && (current < arr[j])) {
            // console.log(`CURRENT SPOT ${current} \n J SPOT ${arr[j]} \n NEXT UP ${arr[j + 1]}`)
            arr[j + 1] = arr[j]
            j--
        }
        // console.log(`LINE 19 ${arr[j + 1]}`)
        arr[j + 1] = current
        // console.log(`LINE 21 ${arr[j + 1]}`)
    }
    return arr
}

module.exports = insertionSort;