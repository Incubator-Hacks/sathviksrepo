import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>About Incubator Hacks</h1>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            Incubator Hacks is a dynamic 2-day tech conference designed for newcomers to dive into cutting-edge technologies, craft innovative project pitches, and compete for post-event mentorship. Participants collaborate to develop solutions using niche tools, with winning teams securing hands-on guidance from industry-experienced mentors to bring their ideas to life after the event.
          </p>
        </div>
        <div className={styles.photoFrame}>
          <div className={styles.photo}></div>
          <span className={styles.caption}>Incubator Hacks 2024</span>
        </div>
      </div>
    </div>
  );
} 