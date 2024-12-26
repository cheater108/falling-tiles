import tilesCoordinates from "../data/tilesCoordinates";
import getTileColor from "../utils/getTileColor";
import styles from "./TileArea.module.css";
function TileArea({ tiles, color }) {
    return (
        <div className={styles.container}>
            {tilesCoordinates.map((row) =>
                row.map((pos) => (
                    <div
                        key={pos}
                        style={getTileColor(color, tiles, pos)}
                        className={styles.tile}
                    ></div>
                ))
            )}
        </div>
    );
}

export default TileArea;
