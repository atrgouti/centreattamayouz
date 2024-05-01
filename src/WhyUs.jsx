import styles from "./WhyUs.module.css";
import certificate from "/certificate.png";
import material from "/material.png";
import upgrade from "/upgrade.png";
import expert from "/expert.png";

function WhyUs() {
  return (
    <div className={styles.WhyUs}>
      <h1>Welcome, Folks!</h1>
      <h3>Why Study With Us</h3>
      <div className={styles.options}>
        <div className={styles.box}>
          <div className={styles.circle}>
            <img src={certificate} alt="" />
          </div>
          <div>
            <p className={styles.title}>Certification</p>
            <p className={styles.descr}>
              Get certification from a respected organization
            </p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.circle}>
            <img src={material} alt="" />
          </div>
          <div>
            <p className={styles.title}>Teaching Materials</p>
            <p className={styles.descr}>
              Use modern learning materials for over 15 language courses
            </p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.circle}>
            <img src={upgrade} alt="" />
          </div>
          <div>
            <p className={styles.title}>Career Upgrade</p>
            <p className={styles.descr}>
              Get certification from a respected organization
            </p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.circle}>
            <img src={expert} alt="" />
          </div>
          <div>
            <p className={styles.title}>Expert Instructors</p>
            <p className={styles.descr}>
              Learn from experienced and dedicated instructors passionate about
              teaching languages and mathematics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
