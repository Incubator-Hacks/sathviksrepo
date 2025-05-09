import styles from "./Sponsors.module.css";
import star from "../assets/star.png";
import sponsorsTitle from "../assets/our-sponsors-title.png";
import aboutTitle from "../assets/about-incubator-hacks-title.png";
import polaroid1 from "../assets/polaroid1.png";
import polaroid2 from "../assets/polaroid2.png";
import polaroid3 from "../assets/polaroid3.png";
import { useState, useEffect } from "react";

const polaroids = [polaroid1, polaroid2, polaroid3];

export default function Sponsors() {
  const [currentPolaroid, setCurrentPolaroid] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPolaroid((prev) => (prev + 1) % polaroids.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.sponsors}>
      {/* Stars */}
      <img src={star} alt="star" className={styles.starTopRight} />
      <img src={star} alt="star" className={styles.starBottomLeft} />
      {/* About Section */}
      <div className={styles.aboutSection}>
        <div className={styles.aboutLeft}>
          <img src={aboutTitle} alt="About Incubator Hacks" className={styles.aboutTitleImg} />
          <div className={styles.aboutTextBox}>
            <p>
              Incubator Hacks is a dynamic 2-day tech conference designed for newcomers to dive into cutting-edge technologies, craft innovative project pitches, and compete for post-event mentorship. Participants collaborate to develop solutions using niche tools, with winning teams securing hands-on guidance from industry-experienced mentors to bring their ideas to life after the event.
            </p>
          </div>
        </div>
        <div className={styles.polaroidFrame}>
          <div className={styles.polaroid}>
            <img src={polaroids[currentPolaroid]} alt="Incubator Hacks" className={styles.polaroidImg} />
            <span className={styles.polaroidCaption}>Incubator Hacks 2024</span>
          </div>
        </div>
      </div>
      {/* Sponsors Section */}
      <img src={sponsorsTitle} alt="Our Sponsors" className={styles.sponsorsTitleImg} />
      <img src={star} alt="star" className={styles.starSponsorsTopRight} />
      <img src={star} alt="star" className={styles.starSponsorsBottomLeft} />
      <div className={styles.sponsorGrid}>
        {[...Array(9)].map((_, index) => (
          <div key={index} className={styles.sponsorBox}></div>
        ))}
      </div>
    </div>
  );
} 