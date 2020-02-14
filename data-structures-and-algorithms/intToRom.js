var intToRoman = function(num) {
    let numOfDigits = num.toString().length;
    console.log(numOfDigits)
    let romNum = '';

    let thouStr = ["", "M", "MM", "MMM"];
    let hunStr = ["", "C", "CC", "CCC", "CD", "D","DC", "DCC", "DCCC", "CM"];
    let tensStr = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    let onesStr = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    let cur = 0;
    let newNum = num;

    for(let i=numOfDigits; i>0; i--){
        console.log('+++++', romNum)
        if(i == 4) {
            cur =  Math.floor(newNum / 1000);
            romNum += thouStr[cur];
            newNum = newNum - (cur * 1000)
        } else if(i == 3) {
            cur =  Math.floor(newNum / 100);
            newNum = newNum - (cur * 100);
            romNum += hunStr[cur];
        } else if(i == 2) {
            cur =  Math.floor(newNum / 10);
            newNum = newNum - (cur * 10);
            romNum += tensStr[cur];
        } else {
            cur =  newNum
            romNum += onesStr[cur];
        }
    }
    return romNum

};

console.log(intToRoman(58))
