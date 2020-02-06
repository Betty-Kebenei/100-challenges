function inserionSort(arr) {
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<i; j++){
            if(arr[i] < arr[j]){
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
inserionSort(arr);
console.log(arr);
