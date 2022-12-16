function modifyArray(nums) {
    return nums.map((num) => (num % 2 ? num * 3 : num * 2));
}
