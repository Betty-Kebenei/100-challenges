// solution 1
function bubbleSort1(arr) {
    for(let i=0; i<arr.length; i++){
        for(let j=i; j<arr.length; j++){
            if(arr[j] > arr[j + 1]){
                const k = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = k
            }
        }
    }
    return arr;
}

// Solution 1 runs on already sorted arrary more than once
// solution 2

function bubbleSort2(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}


const arr = [20, 1, 4, 3, 12, 9, 10, 40];
console.log(arr);
bubbleSort2(arr);
console.log(arr);
