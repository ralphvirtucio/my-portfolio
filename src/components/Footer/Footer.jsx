import { Contact } from '../Contact/Contact';
import { SocialMediaBar } from '../SocialMediaBar/SocialMediaBar';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Contact />
        <h2>ralphvirtucio</h2>

        <SocialMediaBar />
      </div>
    </footer>
  );
};

export default Footer;
