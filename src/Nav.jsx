import styles from "./nav.module.css";
import logo from "/logo.svg";
import meniIcon from "/menuIcon.svg";
import closeIcon from "/closeIcon.svg";
import { useState } from "react";
function Nav() {
  const [activeSideBar, setActiveSideBar] = useState(false);
  return (
    <nav className={styles.nav}>
      <img className={styles.logo} src={logo} alt="" />
      <ul>
        <li>Home</li>
        <li>Courses</li>
        <li>Blog</li>
        <li>Contact Us</li>
      </ul>
      <img
        className={styles.menuIcon}
        src={meniIcon}
        alt=""
        onClick={() => setActiveSideBar(true)}
      />
      <div className={activeSideBar ? styles.sidebaractive : styles.sidebar}>
        <img
          src={closeIcon}
          alt=""
          style={{ height: "40px", margin: "10px" }}
          onClick={() => setActiveSideBar(false)}
        />
      </div>
    </nav>
  );
}

export default Nav;
