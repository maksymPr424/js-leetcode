//TODO: Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

var convertToTitle = function(columnNumber) {
    let result = [];
    while (columnNumber > 0) {
        columnNumber--; 
        let remainder = columnNumber % 26;
        result.push(String.fromCharCode(remainder + 65));
        columnNumber = Math.floor(columnNumber / 26);
    }
    return result.reverse().join('');
}

console.log(convertToTitle(1));    // "A"
console.log(convertToTitle(28));   // "AB"
console.log(convertToTitle(701));  // "ZY"
