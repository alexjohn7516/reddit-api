import styles from '../styles/navbar.module.scss';
import Dash from '../assets/home-outline.svg';
import User from '../assets/person-circle-outline.svg';
import Article from '../assets/newspaper-outline.svg';
import NavItem from './navItem';

// type Navigation = {
//   navigation: NavigationProps[];
// };

interface NavigationProps {
  icon;
  name: string;
  href: string;
}

const navigation: NavigationProps[] = [
  {
    icon: Dash,
    name: 'Dashboard',
    href: '/',
  },
  {
    icon: Article,
    name: 'Subreddits',
    href: '/subreddits',
  },
  {
    icon: User,
    name: 'Users',
    href: '/users',
  },
];

const NavBar = ({ navigation }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Reddit Visuals</h2>
      </div>
      <ul>
        {navigation.map((content) => {
          return (
            <li className={styles.navItem} key={content.name}>
              <NavItem {...content} />
            </li>
          );
        })}
        );
      </ul>
    </div>
  );
};

export default NavBar;

export const getStaticProps = async () => {
  const res = await fetch('localhost:3000/api/navigation');
  const navigation: NavigationProps[] = await res.json();
  return {
    params: {
      navigation,
    },
  };
};
