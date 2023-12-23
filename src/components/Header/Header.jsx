import { SocialMediaBar } from '../SocialMediaBar/SocialMediaBar';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <h1>ralphvirtucio</h1>

        <SocialMediaBar socialMediaListStyle='social-media-link__list--header' />
      </div>
    </header>
  );
};
