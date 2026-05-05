import styles from './PageNotFound.module.css';

function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.code}>404</h1>

      <h2 className={styles.title}>Page Not Found</h2>

      <p className={styles.text}>
        The page you are looking for does not exist or has been moved.
      </p>

      <p className={styles.note}>
        Please check the URL or navigate back to the home page.
      </p>
    </div>
  );
}

export default NotFound;