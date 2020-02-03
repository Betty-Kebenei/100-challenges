function swap(a,b) {
    console.log(a, b)
    let y;
    y = a;
    a = b;
    b = y;
    console.log(a, b)
}

// // taking high as pivot
function partitionHigh(arr, low, high){
    const pivot = arr[high];
    let i = low - 1;
    let y;
    console.log(arr)

    for (j = low; j <= high- 1; j++) {
        if (arr[j] < pivot) {
            i++;
            y = arr[i];
            arr[i] = arr[j];
            arr[j] = y
        }
    }

    y = arr[i+1];
    arr[i+1] = arr[high];
    arr[high] = y
    return i+1
}

// taking low as pivot
function partitionLow(arr, low, high){
    const pivot = arr[low];
    let i = low;
    let y;

    console.log(arr, low, high)
    for (j = low + 1; j <= high; j++) {
        if (arr[j] < pivot) {
            i++;
            console.log("i", i, "j", j)
            console.log("original", arr[i], arr[j])
            y = arr[i];
            arr[i] = arr[j];
            arr[j] = y
            console.log("changed", arr[i], arr[j])
        }
    }

    y = arr[i];
    arr[i] = arr[low];
    arr[low] = y
    console.log (i)
    return i
}

function quickSort(arr, low, high) {
    if(low < high) {
        let p = partitionLow(arr, low, high);
        quickSort(arr, low, p - 1);
        quickSort(arr, p + 1, high)
    }
}
const arr = [20, 1, 4, 3, 12, 9, 10, 40];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
