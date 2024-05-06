import styles from "./Footer.module.css";

// font awsome
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerArea}>
        {/* connect Us  */}
        <div className={styles.contacUs}>
          <p style={{ fontWeight: "700" }}>Contact Us</p>
          <div className={styles.location}>
            <FontAwesomeIcon icon={faLocationDot} />
            <p className={styles.adress}>
              55 Gallaxy Enque, <br /> 2568 steet, 23568 NY
            </p>
          </div>
          <div className={styles.location}>
            <FontAwesomeIcon icon={faPhone} />
            <p className={styles.adress}>(440) 000 000 0000</p>
          </div>
          <div className={styles.location}>
            <FontAwesomeIcon icon={faEnvelope} />
            <p className={styles.adress}>sales@yousite.com</p>
          </div>
        </div>
        {/* informations  */}
        <div className={styles.informations}>
          <ul>
            <li style={{ fontWeight: "700" }}>Information</li>
            <li>
              <ul className={styles.subLinks}>
                <li>Contact Us</li>
              </ul>
            </li>
          </ul>
        </div>
        {/* quick shop */}

        {/* stay connected */}
        <div className={styles.stayConnected}>
          <p style={{ fontWeight: "700" }}>Contact Us</p>
          <div className={styles.SocialMedia} style={{ marginTop: "10px" }}>
            <FontAwesomeIcon icon={faFacebook} />
            <p className={styles.icon}>Facebook</p>
          </div>
          <div className={styles.SocialMedia}>
            <FontAwesomeIcon icon={faTwitter} />
            <p className={styles.icon}>Twitter</p>
          </div>
          <div className={styles.SocialMedia}>
            <FontAwesomeIcon icon={faPinterest} />
            <p className={styles.icon}>Pintrest</p>
          </div>
          <div className={styles.SocialMedia}>
            <FontAwesomeIcon icon={faInstagram} />
            <p className={styles.icon}>Instagram</p>
          </div>
        </div>
      </div>
      <div className={styles.copyRight}>
        <p>© 2024 ATTAMAYOU CENTRE by BILAL ATRGOUTI. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
