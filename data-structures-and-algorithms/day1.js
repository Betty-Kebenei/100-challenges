// Challenge:
// Divide a string in N equal parts

// Understanding the problem:
// What input should I expect? A string and a value(n)
// What output should I expect? The parts of the string
// What if the string is not divisible by N? Return error message

// Solution:
// Get the size of the string
// Get the size of a part:- length-of-string/n
// Print the parts

function dividingStr(str, n) {
    const strSize = str.length;

    if (strSize % n != 0) return "The string is not divisible by" + n;

    const partSize = strSize/n;
    let newStr = '';
    for(let i=1; i<=strSize; i++){
        newStr += str.charAt(i-1);
        if((i%partSize) == 0) {
            newStr += '\n';
        }
    }
    return newStr
}

console.log(dividingStr("This is a good challenge", 3))

