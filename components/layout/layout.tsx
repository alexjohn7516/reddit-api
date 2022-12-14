import NavBar from '../nav/navbar';
import styles from './layout.module.scss';
import Header from '../header';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Header />
      </header>
      <nav className={styles.nav}>
        <NavBar />
      </nav>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
