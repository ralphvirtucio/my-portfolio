import styles from './Skills.module.css';

export const Skills = () => {
  return (
    <section className={styles.skill}>
      <div className={styles.container}>
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
          <li className={styles['skill__list-item']}>
            <h3>SASS</h3>
            <p>2 Years Experience</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
