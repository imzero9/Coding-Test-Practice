// Day4: Count Objects

function getCount(objects) {
    let result = 0;

    for (let i = 0; i < objects.length; i++) {
        if (objects[i].x === objects[i].y) {
            result += 1;
        }
    }

    return result;
}

function getCount(objects) {
    return objects.filter((obj) => obj.x === obj.y).length;
}
