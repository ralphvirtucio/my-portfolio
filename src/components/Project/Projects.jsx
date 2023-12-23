import thumbnailProjectOne from '../../assets/images/thumbnail-project-1-small.webp';
import thumbnailProjectTwo from '../../assets/images/thumbnail-project-2-small.webp';
import thumbnailProjectThree from '../../assets/images/thumbnail-project-3-small.webp';
import thumbnailProjectFour from '../../assets/images/thumbnail-project-4-small.webp';
import thumbnailProjectFive from '../../assets/images/thumbnail-project-5-small.webp';
import thumbnailProjectSix from '../../assets/images/thumbnail-project-6-small.webp';
import styles from './Projects.module.css';

export const Project = () => {
  return (
    <section className={styles.project}>
      <div className={styles.project__header}>
        <h2>Projects</h2>

        <a href=''>Contact Me</a>
      </div>

      <ul className={styles.project__list}>
        <li>
          <img
            src={thumbnailProjectOne}
            alt='Design Portfolio'
          />
          <h2>Design Portfolio</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li></li>
          </ul>
        </li>
        <li>
          <img
            src={thumbnailProjectTwo}
            alt='E-Learning Landing Page'
          />
          <h2>E-Learning Landing Page</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li></li>
          </ul>
        </li>
        <li>
          <img
            src={thumbnailProjectThree}
            alt='TODO WEB APP'
          />
          <h2>Todo Web App</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </li>
        <li>
          <img
            src={thumbnailProjectFour}
            alt='Entertainment Web App'
          />
          <h2>Entertainment Web App</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </li>
        <li>
          <img
            src={thumbnailProjectFive}
            alt='Memory Game'
          />
          <h2>Memory Game</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </li>
        <li>
          <img
            src={thumbnailProjectSix}
            alt='Art Gallery Showcase'
          />
          <h2>Art Gallery Showcase</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </li>
      </ul>
    </section>
  );
};
