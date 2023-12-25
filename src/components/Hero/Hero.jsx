import testProfileImg from '../../assets/images/image-profile-mobile.webp';
import { ButtonLink } from '../Button/Button';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__content}>
        <span className={styles.hero__ring}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='530'
            height='129'>
            <g
              fill='none'
              fillRule='evenodd'
              stroke='#FFF'
              opacity='.25'>
              <ellipse
                cx='265'
                cy='40'
                rx='264.5'
                ry='39.5'
              />
              <ellipse
                cx='265'
                cy='52'
                rx='264.5'
                ry='39.5'
              />
              <ellipse
                cx='265'
                cy='65'
                rx='264.5'
                ry='39.5'
              />
              <ellipse
                cx='265'
                cy='77'
                rx='264.5'
                ry='39.5'
              />
              <ellipse
                cx='265'
                cy='89'
                rx='264.5'
                ry='39.5'
              />
            </g>
          </svg>
        </span>

        <span className={styles.hero__circle}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='129'
            height='129'>
            <circle
              cx='830.5'
              cy='585.5'
              r='64'
              fill='none'
              stroke='#FFF'
              transform='translate(-766 -521)'
            />
          </svg>
        </span>
        <h2 className={styles['hero__content--heading']}>
          Nice to meet you! I&apos;m{' '}
          <span className={styles.hero__name}>Ralph Virtucio</span>.
        </h2>

        <p className={styles['hero__content--text']}>
          Based in the Philippines, I&apos;m a front-end developer passionate
          about building accessible web apps that users love.
        </p>

        <ButtonLink link='#'>Contact Me</ButtonLink>
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
