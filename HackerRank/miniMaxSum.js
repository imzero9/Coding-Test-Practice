// My solution
function miniMaxSum(arr) {
    // Write your code here
    arr.sort((a, b) => a - b);
    let min = 0;
    let max = 0;

    for (let i = 0; i < 4; i++) {
        min += arr[i];
    }

    for (let j = 1; j < arr.length; j++) {
        max += arr[j];
    }

    console.log(min, max);
}

// Top rated solution
function miniMaxSum(arr) {
    arr.sort((a, b) => a - b);

    let min = arr.slice(0, arr.length - 1).reduce((a, b) => a + b, 0);
    let max = arr.slice(1).reduce((a, b) => a + b, 0);

    console.log(min, max);
}
