function sides(literals, ...expressions) {
    const [area, perimeter] = expressions;

    const long = (perimeter + Math.sqrt(perimeter ** 2 - 16 * area)) / 4;
    const short = (perimeter - Math.sqrt(perimeter ** 2 - 16 * area)) / 4;

    return [short, long];
}
