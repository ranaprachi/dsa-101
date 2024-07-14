var letterCombinations = function(digits) {
    if (!digits) return null;
    const numMap = new Map([
        ["2", ['a', 'b', 'c']],
        ["3", ['d', 'e', 'f']],
        ["4", ['g', 'h', 'i']],
        ["5", ['j', 'k', 'l']],
        ["6", ['m', 'n', 'o']],
        ["7", ['p', 'q', 'r', 's']],
        ["8", ['t', 'u', 'v']],
        ["9", ['w', 'x', 'y', 'z']],
    ]);
    const result = [];
    const getNum = (letters, nextDigit, res = "") => {
        for (let i = 0 ; i < letters.length; i ++) {
            let str = res.concat(letters[i]);
            if (!isNaN(nextDigit)) {
                const next = nextDigit && nextDigit.length > 1 
                    ? nextDigit.slice(1) : undefined;
                getNum(numMap.get(nextDigit), next, str);
            } else {
                result.push(str);
            }
        }
    }
    const firstDigit = digits.charAt(0);
    const remDigits = digits.length > 1 ? digits.slice(1) : undefined;
    getNum(numMap.get(firstDigit), remDigits);
    return result;
};

console.log(letterCombinations("23"));