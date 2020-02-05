function merge(left, right){
    console.log(left, right)
    let i = 0;
    let j = 0;
    let fullArr = [];

    while(i < left.length && j < right.length) {
        if(left[i] < right[j]){
            fullArr.push(left[i]);
            i++;
        } else {
            fullArr.push(right[j]);
            j++
        }
    }

    while(i < left.length) {
        fullArr.push(left[i]);
        i++;
    }

    while(j < right.length) {
        fullArr.push(right[j]);
        j++;
    }
}

function mergeSort(arr){
    if(arr.length < 2) {
        return arr;
    }

    const mid = Math.floor(arr.length/2);
    console.log( arr.slice(0, mid), arr.slice(mid))

    return merge(
        mergeSort(arr.slice(0, mid)),
        mergeSort(arr.slice(mid))
        );
}

const arr = [20, 1, 4, 3, 12, 9, 10, 40];
console.log(arr);
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
