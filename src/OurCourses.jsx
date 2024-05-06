import styles from "./WhyUs.module.css";
import first from "/weoffer1.jpg";
import secend from "/weoffer2.jpg";
import third from "/weoffer3.jpg";
import forth from "/weoffer4.jpg";
import germanflag from "/germanflag.jpg";
import frenchflag from "/frenchflag.jpg";
import englishflag from "/englishflag.jpg";
import { Link } from "react-router-dom";

function WhyUs() {
  return (
    <div className={styles.WhyUs}>
      <h1>Courses</h1>
      <h3>we have the best program</h3>
      <div className={styles.options}>
        <div className={styles.box}>
          <div className={styles.circle} style={{ borderRadius: "0px" }}>
            <img src={germanflag} alt="" style={{ height: "100%" }} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p className={styles.title}>German Course</p>
            <button
              style={{
                padding: "10px 30px",
                backgroundColor: "black",
                color: "white",
                fontWeight: "bold",
                border: "none",
                marginTop: "10px",
                cursor: "pointer",
              }}
            >
              <Link to={"/courses/german"}>VIEW MORE DETAILS</Link>
            </button>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.circle} style={{ borderRadius: "0px" }}>
            <img src={frenchflag} alt="" style={{ height: "100%" }} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p className={styles.title}>French Course</p>
            <button
              style={{
                padding: "10px 30px",
                backgroundColor: "black",
                color: "white",
                fontWeight: "bold",
                border: "none",
                marginTop: "10px",
                cursor: "pointer",
              }}
            >
              <Link to={"/courses/french"}>VIEW MORE DETAILS</Link>
            </button>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.circle} style={{ borderRadius: "0px" }}>
            <img src={englishflag} alt="" style={{ height: "100%" }} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p className={styles.title}>English Course</p>
            <button
              style={{
                padding: "10px 30px",
                backgroundColor: "black",
                color: "white",
                fontWeight: "bold",
                border: "none",
                marginTop: "10px",
                cursor: "pointer",
              }}
            >
              <Link to={"/courses/english"}>VIEW MORE DETAILS</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
