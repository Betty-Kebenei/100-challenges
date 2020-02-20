var isValid = function(s) {
    let sArr = s.split('')
    let arr = []
    let valid = true

    if(sArr.length % 2 != 0) {
        valid = false
        return valid;
    }

    let i = 0
    while(i < sArr.length) {

       if (sArr[i] == '(' || sArr[i] == '{' || sArr[i] == '[')  {
           arr.push(sArr[i]);
           i++;
       } else if (arr.length > 0) {
           let ch = sArr[i]
           let pop = arr.pop()
           if (ch == ')' && pop == '(') valid = true
           else if (ch == '}' && pop == '{') valid = true
           else if (ch == ']' && pop == '[') valid = true
           else {
               valid = false
               break;
           }
           i++;
       } else {
           valid = false
           break
       }
    }

    if(arr.length != 0) valid = false

    return valid;
};

console.log(isValid("{{)}"))
// console.log(isValid("()"))
// console.log(isValid("(){}[])"))
// console.log(isValid("(){}[]"))
// console.log(isValid("({[]})"))
