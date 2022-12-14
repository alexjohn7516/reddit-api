import styles from './navItem.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavigationProps {
  icon;
  name: string;
  href: string;
}

const NavItem = ({ icon, name, href }: NavigationProps) => {
  const router = useRouter();
  const Comp = icon;
  return (
    <Link href={href}>
      <a
        className={
          router.pathname === href
            ? `${styles.navContainer} ${styles.active}`
            : `${styles.navContainer}`
        }
        data-testid={name}
      >
        <div className={styles.textContainer}>
          <div className={styles.icon}>
            <Comp width={25} height={25} />
          </div>
          <p>{name}</p>
        </div>
        <div className={styles.bar}></div>
      </a>
    </Link>
  );
};

export default NavItem;
