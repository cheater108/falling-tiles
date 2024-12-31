function needToRerender(tiles) {
    let flag = false;
    let ind = 0;

    for (const tile of tiles) {
        if (Number(tile.split(",")[0]) > 21) {
            flag = true;
            break;
        }
        ind++;
    }
    return { flag, ind };
}

export default needToRerender;
