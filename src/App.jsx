import { useEffect, useRef, useState } from "react";
import "./App.css";
import TileArea from "./components/TileArea";
import { moveByOne } from "./utils/moveByOne";
import {
    getRandomColor,
    getRandomTiles,
    incrementalRandomTile,
} from "./utils/randomGenerator";
import needToRerender from "./utils/needToRerender";

function App() {
    const [tiles, setTiles] = useState(getRandomTiles);
    const [color, setColor] = useState(getRandomColor);
    const [colorToggle, setColorToggle] = useState(false);
    const [play, setPlay] = useState(true);
    const [speed, setSpeed] = useState(false);
    const timeRef = useRef(null);

    useEffect(() => {
        if (play) {
            const { flag, ind } = needToRerender(tiles);
            if (flag) {
                setTiles(() => incrementalRandomTile(tiles, ind));
                return;
            }
            timeRef.current = setTimeout(
                () => setTiles(moveByOne(tiles)),
                speed ? 30 : 50
            );
        }
    });

    // useEffect(() => {
    //     if (play) {
    //         setTimeout(() => {
    //             setColor(() => getRandomColor());
    //             setColorToggle(!colorToggle);
    //         }, 2000);
    //     }
    // }, [colorToggle]);

    return (
        <div className="container">
            <h1 className="title" style={{ color }}>
                falling tiles....
            </h1>
            <TileArea tiles={tiles} color={color} />
            <div className="btns">
                <button className="btn" onClick={() => setPlay(!play)}>
                    {play ? "pause" : "play"}
                </button>
                <button
                    className="btn"
                    onClick={() => {
                        setSpeed(!speed);
                        clearTimeout(timeRef.current);
                    }}
                >
                    {speed ? "slower" : "faster"}
                </button>
            </div>
        </div>
    );
}

export default App;
