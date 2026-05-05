import styles from './About.module.css';

function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About This App</h1>

      <p className={styles.text}>
        This is a simple React application for managing posts.
      </p>

      <p className={styles.text}>
        Users can create, edit, and delete posts, and see updates in real time.
      </p>

      <p className={styles.text}>
        The project was built to practice core React concepts and build a clean component-based structure.
      </p>

    </div>
  );
}

export default About;