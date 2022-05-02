/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    if (!Array.isArray(arr)) throw Error(`'arr' parameter must be an instance of the Array!`);
    const conditions = {
        discardNext: '--discard-next',
        discardPrev: '--discard-prev',
        doubleNext: '--double-next',
        doublePrev: '--double-prev',
    }
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case conditions.discardNext:
                i++;
                break;
            case conditions.discardPrev:
                if (arr[i - 2] !== conditions.discardNext) { newArr.pop(); }
                break;
            case conditions.doubleNext:
                if (arr[i + 1]) { newArr.push(arr[i + 1]); }
                break;
            case  conditions.doublePrev:
                if (arr[i - 1] && arr[i - 2] !== conditions.discardNext) { newArr.push(arr[i - 1]); }
                break;
            default:
                newArr.push(arr[i]);
                break;
        }
    };
    return newArr;
}

module.exports = {
    transform
};