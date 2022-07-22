// 1. Set()
const nums = [1, 2, 3, 6, 6, 7, 2, 2, 8, 9];

const uniqueNums = [...new Set(nums)];

console.log(uniqueNums);

// 2. indexOf()
const uniqueNums2 = nums.filter((item, index) => {
    return nums.indexOf(item) === index;
});

console.log(uniqueNums2);

// 3. caching / frequency map
function uniqueNums() {
    const uniqueElements = {};
    const result = [];
    for (let element of arr) {
        if (!uniqueElements[element]) {
            result.push(element);
        }
        uniqueElements[element] = element;
    }
    return result;
}
