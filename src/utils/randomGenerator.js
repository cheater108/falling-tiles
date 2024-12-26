function getRandomColor() {
    const colors = [
        "red",
        "limegreen",
        "violet",
        "purple",
        "yellow",
        "skyblue",
        "hotpink",
        "blue",
    ];
    const ind = Math.floor(Math.random() * colors.length);
    return colors[ind];
}

function getRandomTiles() {
    let noOfTiles = Math.floor(Math.random() * 15) + 2;
    const tiles = [];
    while (noOfTiles > 0) {
        const x = Math.floor(Math.random() * 20) + 1;
        const val = `${1 - Math.floor(Math.random() * 3)},${x}`;
        if (!tiles.includes(val)) tiles.push(val);
        noOfTiles--;
    }
    return [...tiles];
}

export { getRandomColor, getRandomTiles };
