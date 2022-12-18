function getDayName(dateString) {
    const days = ['Sunday', 'Monday', "Tuesday", 'Wednesday', 'Thursday','Friday', 'Saturday']
    let dayName;

    const date = new Date(dateString)
    dauName = days[date.getDay()]
    return dayName;
}