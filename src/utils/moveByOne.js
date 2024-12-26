function moveByOne(tiles) {
    return tiles.map((pos) => {
        const arr = pos.split(",");
        let x = Number(arr[0]) + 1;
        const y = arr[1];

        return `${x},${y}`;
    });
}

export { moveByOne };
