import { SocialMediaBar } from '../SocialMediaBar/SocialMediaBar';
import { ContactContainer } from '../../container/ContactContainer';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <ContactContainer />

        <SocialMediaBar customSocialMediaStyle='footer'>
          <h2>ralphvirtucio</h2>
        </SocialMediaBar>
      </div>
    </footer>
  );
};

export default Footer;
