function selectionSort(arr) {
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] > arr[j]){
                const k = arr[i];
                arr[i] = arr[j];
                arr[j] = k
            }
        }
    }
    return arr;
}

const arr = [20, 4, 1, 3, 12, 9, 10, 40];
console.log(arr);
selectionSort(arr);
console.log(arr);
