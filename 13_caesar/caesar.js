const caesar = function(str, sub) {
    let unicodeString = '', answer = "", hexSub = sub.toString(16), hexTotal;
    while (hexSub.length < 4) {
        hexSub = '0' + hexSub;
    }
    console.log("hexSub " + hexSub);
    console.log("sub " + sub);
    for (var i=0; i < str.length; i++) {
        console.log("Char " + str.charAt(i));
        if(String(str.charAt(i)).match(/[a-z]/i)) {
        var unicode = str.charCodeAt(i).toString(16);
        console.log("oldUnicode " + unicode);
        while (unicode.length < 4) {
                    unicode = '0' + unicode;
        }
        console.log("newUnicode " + unicode);
        hexTotal = addHex(unicode, hexSub);
        hexTotal = '0x' + hexTotal;
        console.log("Total " + hexTotal);
        answer += String.fromCharCode(hexTotal);
        console.log("Answer " + answer);
    }
    else {
        answer += str.charAt(i).toString();
    }
}
    // answer = String.fromCharCode(unicodeString);
    console.log(answer);
    return answer;

};

function addHex(a, b) {
    var ndigits = 4, i, carry = 0, d, result = "";
    for (i = ndigits - 1; i >= 0; i--) {
        d = parseInt(a[i], 16) + parseInt(b[i], 16) + carry;
        carry = d >> 4;
        result = (d & 15).toString(16) + result;
      }
      return result;
}

// Do not edit below this line
module.exports = caesar;
