// My solution
function timeConversion(s) {
    // Write your code here
    const unit = s.slice(-2);
    const hour = s.slice(0, 2);

    if (unit === "PM") {
        if (hour === "12") {
            return s.slice(0, s.length - 2);
        } else {
            const convertedTime =
                String(parseInt(hour) + 12) + s.slice(2, s.length - 2);
            return convertedTime;
        }
    }

    if (unit === "AM") {
        if (hour === "12") {
            const convertedTime = "00" + s.slice(2, s.length - 2);
            return convertedTime;
        } else {
            return s.slice(0, s.length - 2);
        }
    }
}

// Top rated solution
function timeConversion(s) {
    let hours = s.substr(0, 2);
    let minutes = s.substr(3, 2);
    let seconds = s.substr(-4, 2);
    let modifier = s.substr(-2, 2);

    if (hours === "12") {
        hours = "00";
    }

    if (modifier === "PM") {
        hours = parseInt(hours, 10) + 12;
    }

    let time = `${hours}:${minutes}:${seconds}`;
    return time;
}
