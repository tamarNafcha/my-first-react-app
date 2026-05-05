import { NavLink } from 'react-router';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.linkActive : styles.link
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/posts"
          className={({ isActive }) =>
            isActive ? styles.linkActive : styles.link
          }
        >
          Posts
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? styles.linkActive : styles.link
          }
        >
          About
        </NavLink>

      </nav>
    </header>
  );
}

export default Header;