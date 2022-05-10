// 제곱을 구하자
// 공백으로 구분하여 두 숫자 a, b가 주어지면 a의 b승을 구하는 코드를 작성하세요.

const nums = prompt("두 숫자를 입력하세요(공백으로 구분").split(" ");

console.log(Math.pow(parseInt(nums[0], 10), parseInt(nums[1], 10)));