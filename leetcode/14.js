const longestCommonPrefix = function(strs) {
    if (!strs.length) {
        return "";
    }
    if (strs.length === 1) {
        return strs[0];
    }
    let isSame = false, commonPreStr = [], count = 0;

    do {
        let commonPrefix = strs[0].charAt(count);
        isSame = strs.every((str) => str.charAt(count) === commonPrefix);
        if (isSame) {
            commonPreStr.push(commonPrefix);
        }
        count++;
    } while (isSame);
    return commonPreStr.join("");
};

console.log('--->>', longestCommonPrefix(["flower","flow","flight"]));