import styles from './Skills.module.css';

export const Skills = () => {
  return (
    <section className={styles.skill}>
      <ul className={styles.skill__list}>
        <li className={styles['skill__list-item']}>
          <h3>HTML</h3>
          <p>3 Years Experience</p>
        </li>
        <li className={styles['skill__list-item']}>
          <h3>CSS</h3>
          <p>3 Years Experience</p>
        </li>
        <li className={styles['skill__list-item']}>
          <h3>JavaScript</h3>
          <p>3 Years Experience</p>
        </li>
        <li className={styles['skill__list-item']}>
          <h3>React</h3>
          <p>2 Years Experience</p>
        </li>
        <li className={styles['skill__list-item']}>
          <h3>Python</h3>
          <p>1 Year Experience</p>
        </li>
        <li>
          <h3>Sass</h3>
          <p>2 Years Experience</p>
        </li>
      </ul>
      <span className={styles.skill__ring}>
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
    </section>
  );
};
