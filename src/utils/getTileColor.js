function getTileColor(color, tiles, currPosition) {
    const { x, y } = getNumericPos(currPosition);
    const style = { backgroundColor: color };
    if (tiles.includes(currPosition)) return style;

    for (const item of tiles) {
        const pos = getNumericPos(item);
        if (pos.y === y) {
            if (pos.x - x === 1) return { ...style, opacity: "0.8" };
            else if (pos.x - x === 2) return { ...style, opacity: "0.6" };
            else if (pos.x - x === 3) return { ...style, opacity: "0.4" };
            else if (pos.x - x === 4) return { ...style, opacity: "0.3" };
            else if (pos.x - x === 5) return { ...style, opacity: "0.2" };
        }
    }
    return {};
}

export function getNumericPos(pos) {
    const arr = pos.split(",");
    return {
        x: Number(arr[0]),
        y: Number(arr[1]),
    };
}

function colorLevel(color, lvl) {
    const [r, g, b] = color.split(",");
    if (lvl === 0) return `rgba(${r},${g},${b})`;
    else if (lvl === 1) return `rgba(${r - 50},${g},${b})`;
    else if (lvl === 2) return `rgba(${r - 100},${g},${b})`;
    else if (lvl === 3) return `rgba(${r - 130},${g},${b})`;
    else if (lvl === 4) return `rgba(${r - 170},${g},${b})`;
    else if (lvl === 5) return `rgba(${r - 200},${g},${b})`;
}

export default getTileColor;
