import styles from "./Sponsors.module.css";
import star from "../assets/star.png";

export default function Sponsors() {
  return (
    <div className={styles.sponsors}>
      <img src={star} alt="star" className={styles.starTopRight} />
      <img src={star} alt="star" className={styles.starBottomLeft} />
      <img src={star} alt="star" className={styles.starTopLeft} />
      <img src={star} alt="star" className={styles.starBottomRight} />
      <h1>OUR SPONSORS</h1>
      <div className={styles.sponsorGrid}>
        {[...Array(12)].map((_, index) => (
          <div key={index} className={styles.sponsorBox}></div>
        ))}
      </div>
    </div>
  );
} 