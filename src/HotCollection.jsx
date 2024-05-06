import summerBackground from "/summer-background.jpg";
import { Link } from "react-router-dom";
import styles from "./HotCollection.module.css";
function HotCollection() {
  return (
    <section className={styles.section}>
      <img src={summerBackground} alt="" loading="lazy" className={styles.bg} />
      <div className={styles.content}>
        <h3>Better future for you is our goal</h3>
        <h1>Unlock Your Career Potential</h1>
        <p>
          Empowering your career dreams with personalized guidance and support.
        </p>
        <Link to={"/courses"}>
          <button>
            <Link to={"/courses"}>VIEW OUR COURSES</Link>
          </button>
        </Link>
      </div>
    </section>
  );
}

export default HotCollection;
