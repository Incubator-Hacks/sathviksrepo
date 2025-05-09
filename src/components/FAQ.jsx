import styles from "./FAQ.module.css";

const faqs = [
  {
    q: "What is a Hackathon?",
    a: "A hackathon is a tech event where participants build innovative projects in a short time, often competing for prizes and mentorship."
  },
  {
    q: "What if I've never been to a hackathon before?",
    a: "No worries! Incubator Hacks is designed for beginners. You'll get plenty of support and guidance throughout the event."
  },
  {
    q: "Who can Participate?",
    a: "Anyone interested in technology and innovation! No prior experience required."
  },
  {
    q: "How much does it cost?",
    a: "It's completely free to participate!"
  },
  {
    q: "How many people can be on a team?",
    a: "Teams can have up to 4 members."
  },
  {
    q: "Okay, you've convinced me. How do I sign up?",
    a: "Just click the 'Register Now' button on the landing page and fill out the form!"
  }
];

export default function FAQ() {
  return (
    <div className={styles.faq}>
      <h1>FAQ</h1>
      <div className={styles.grid}>
        {faqs.map((item, idx) => (
          <details key={idx} className={styles.item}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
} 