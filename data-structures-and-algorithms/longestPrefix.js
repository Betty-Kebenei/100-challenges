var longestCommonPrefix = function(strs) {
    if (strs.length == 0) return "";
    if (strs.length == 1) return strs[0];

    let prefix = '';
    let charPos = 0;
    let char;
    for(let i=0; i<strs[0].length; i++) {
        char = strs[0].charAt(charPos);
        let charCommon = false;
        for(let j=1; j<strs.length; j++) {
            if(strs[j].charAt(charPos) == char) {
                charCommon = true;
            }  else {
                charCommon = false;
                break;
            }
        }
        if(charCommon) {
            prefix += char;
            charPos += 1;
        } else {
           break;
        }
    }
    return prefix;
};

const arr = ['aa', 'aa'];
const arr2 = ["aaa","aa","aaa"];
console.log(longestCommonPrefix(arr2))
