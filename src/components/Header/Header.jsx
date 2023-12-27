import { SocialMediaBar } from '../SocialMediaBar/SocialMediaBar';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <SocialMediaBar customSocialMediaStyle='header'>
        <h1>ralphvirtucio</h1>
      </SocialMediaBar>
    </header>
  );
};

export default Header;
