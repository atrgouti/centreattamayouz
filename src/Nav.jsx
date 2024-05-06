import styles from "./nav.module.css";
import logo from "/logo.svg";
import meniIcon from "/menuIcon.svg";
import closeIcon from "/closeIcon.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function Nav({ ps, tp, bc }) {
  const [activeSideBar, setActiveSideBar] = useState(false);

  const [scrollY, setScrollY] = useState(0);
  function handleScrollY() {
    setScrollY(window.scrollY);
  }

  useEffect(function () {
    document.addEventListener("scroll", handleScrollY);

    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, []);
  return (
    <nav
      className={styles.nav}
      style={{
        // boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        position: scrollY < 100 ? ps : "fixed",
        top: scrollY < 100 ? tp : "0px",

        backgroundColor: scrollY < 100 ? bc : "white",
      }}
    >
      <img className={styles.logo} src={logo} alt="" />
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/courses"}>Courses</Link>
        </li>
        <li>
          <Link to={"/blogs"}>Blogs</Link>
        </li>
        <li>
          <Link to={"/contactus"}>Contact us</Link>
        </li>
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
