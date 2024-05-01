import styles from "./WhyUs.module.css";
import first from "/weoffer1.jpg";
import secend from "/weoffer2.jpg";
import third from "/weoffer3.jpg";
import forth from "/weoffer4.jpg";

function WhyUs() {
  return (
    <div className={styles.WhyUs}>
      <h1>What We Offer</h1>
      <h3>New Programs</h3>
      <div className={styles.options}>
        <div className={styles.box}>
          <div className={styles.circle} style={{ borderRadius: "0px" }}>
            <img src={first} alt="" style={{ height: "100%" }} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p className={styles.title}>Language Courses for All Levels</p>
            <p className={styles.descr}>
              Personalized language classes for all levels, ensuring effective
              learning for every student.
            </p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.circle} style={{ borderRadius: "0px" }}>
            <img src={secend} alt="" style={{ height: "100%" }} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p className={styles.title}>Study Skills Development</p>
            <p className={styles.descr}>
              Learn essential study strategies and time management techniques.
            </p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.circle} style={{ borderRadius: "0px" }}>
            <img src={third} alt="" style={{ height: "100%" }} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p className={styles.title}>Mathematics Tutoring and Support</p>
            <p className={styles.descr}>
              Expert support to enhance math skills and boost academic
              performance.
            </p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.circle} style={{ borderRadius: "0px" }}>
            <img src={forth} alt="" style={{ height: "100%" }} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p className={styles.title}>Interactive Learning Resources</p>
            <p className={styles.descr}>
              Access multimedia tools and practice exercises to reinforce
              learning outside of class.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
