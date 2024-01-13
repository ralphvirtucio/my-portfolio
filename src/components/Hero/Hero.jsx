import profileMobile from '../../assets/images/my-profile-bg-mobile.png';
import profileTablet from '../../assets/images/my-profile-bg-tablet.png';
import profileDesktop from '../../assets/images/my-profile-bg-desktop.png';
import { ButtonLink } from '../Button/Button';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.hero__content}>
          <h2 className={styles['hero__content--heading']}>
            Nice to meet you! I&apos;m{' '}
            <span className={styles.hero__name}>Ralph Virtucio</span>.
          </h2>
          <p className={styles['hero__content--text']}>
            Based in the Philippines, I&apos;m a front-end developer passionate
            about building accessible web apps that users love.
          </p>

          <ButtonLink link='#contact'>Contact Me</ButtonLink>
        </div>

        <div className={styles.hero__img}>
          <picture>
            <source
              media='(min-width: 48rem)'
              srcSet={profileTablet}
            />
            <source
              media='(min-width: 64rem)'
              srcSet={profileDesktop}
            />

            <img
              src={profileMobile}
              alt='Profile'
            />
          </picture> 
        </div>
      </div>
    </section>
  );
};
