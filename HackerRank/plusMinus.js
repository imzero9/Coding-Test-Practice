function plusMinus(arr) {
    // Write your code here
    const counts = new Array(3).fill(0);
    const length = arr.length;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) counts[0]++;
        if (arr[i] < 0) counts[1]++;
        if (arr[i] === 0) counts[2]++;
    }

    counts.forEach((count) => console.log((count / length).toFixed(6)));
}
