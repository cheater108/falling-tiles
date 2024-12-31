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
    let noOfTiles = Math.floor(Math.random() * 8) + 5;
    const tiles = [];
    const x_place = [];
    while (noOfTiles > 0) {
        const x = Math.floor(Math.random() * 20) + 1;
        const val = `${1 - Math.floor(Math.random() * 7)},${x}`;
        if (!x_place.includes(x)) {
            tiles.push(val);
            x_place.push(x);
        }
        noOfTiles--;
    }
    return [...tiles];
}

function incrementalRandomTile(tiles, ind) {
    const x_place = [];
    let i = 0;
    console.log(tiles);
    for (let tile of tiles) {
        if (i === ind) continue;
        x_place.push(Number(tile.split(",")[1]));
    }

    const x = Math.floor(Math.random() * 20) + 1;
    const val = `${1 - Math.floor(Math.random() * 7)},${x}`;
    const copy = [...tiles];
    if (!x_place.includes(x)) {
        copy.splice(ind, 1, val);
    }

    return copy;
}

export { getRandomColor, getRandomTiles, incrementalRandomTile };
