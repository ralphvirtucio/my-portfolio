import testProfileImg from '../../assets/images/image-profile-mobile.webp';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__content}>
        <h2 className={styles['hero__content--heading']}>
          Nice to meet you! I&apos;m{' '}
          <span className={styles.hero__name}>Ralph Virtucio</span>.
        </h2>

        <p className={styles['hero__content--text']}>
          Based in the Philippines, I&apos;m a front-end developer passionate
          about building accessible web apps that users love.
        </p>

        <a
          href=''
          className={styles['btn--contact__me']}>
          Contact Me
        </a>
      </div>

      <div className={styles.hero__img}>
        <img
          src={testProfileImg}
          alt='Profile'
        />
      </div>
    </section>
  );
};
