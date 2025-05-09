import styles from "./Landing.module.css";
import chickEgg from "../assets/chick-egg.jpg"; // Updated to use JPG logo
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className={styles.landing}>
      <div className={styles.left}>
        <h1>Incubator Hacks</h1>
        <p>
          A 2-day long hackathon for complete beginners to explore technology and build a project. Winning project pitches receive technical guidance from mentors to continue developing their ideas after the event.
        </p>
        <div className={styles.buttonGroup}>
          <Link to="/about" className={styles.button}>About Us</Link>
          <Link to="/sponsors" className={styles.button}>Our Sponsors</Link>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <span className={styles.star}>★</span>
            <p>Tech conferences where participants build innovative hardware/software projects and present them to judges for prizes.</p>
          </div>
          <div className={styles.card}>
            <span className={styles.heart}>♥</span>
            <p>A 2-day hackathon crash course for newbies! Dream up techy projects, pitch your wildest idea—winning teams get mentor superpowers to keep the magic alive post-event!</p>
          </div>
          <div className={styles.card}>
            <span className={styles.eye}>👁️</span>
            <p>Programs that give early-stage companies access to mentorship, technical guidance, investors, and other support to get them established.</p>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <img src={chickEgg} alt="Incubator Hacks Chick" className={styles.illustration} />
      </div>
    </div>
  );
} 