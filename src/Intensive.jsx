import { Link } from "react-router-dom";
import styles from "./intensive.module.css";

function Intensive() {
  return (
    <div className={styles.area}>
      <div>
        <h1>Intensive English Program</h1>
        <h3>for International Students</h3>
      </div>
      <button>
        <Link to={"/courses/english"}>LEARN MORE</Link>L
      </button>
    </div>
  );
}

export default Intensive;
