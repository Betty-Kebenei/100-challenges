var findMedianSortedArrays = function(nums1, nums2) {
    let medIndex = 0;
    let med = 0;

    let i = 0;
    let j = 0;
    let newArr = [];

    while(i < nums1.length && j < nums2.length) {
        if(nums1[i] < nums2[j]){
            newArr.push(nums1[i]);
            i++;
        } else {
            newArr.push(nums2[j]);
            j++
        }
    }

    while(i < nums1.length) {
        newArr.push(nums1[i]);
        i++;
    }

    while(j < nums2.length) {
        newArr.push(nums2[j]);
        j++;
    }

    if(newArr.length % 2 == 0) {
        medIndex = newArr.length / 2;
        med = (newArr[medIndex - 1] + newArr[medIndex]) / 2;
    } else {
        medIndex = Math.ceil(newArr.length / 2);
        med = newArr[medIndex - 1];
    }

    return med;
};

const nums1 = [1, 2]
const nums2 = [3, 4]
console.log(findMedianSortedArrays(nums1, nums2))
