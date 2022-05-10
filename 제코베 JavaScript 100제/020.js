// 몫과 나머지
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

const nums = prompt("두 숫자를 입력하세요(공백으로 구분)").split(" ");

console.log(Math.floor(nums[0]/nums[1]), nums[0]%nums[1]);