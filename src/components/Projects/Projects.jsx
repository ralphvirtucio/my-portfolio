import thumbnailProjectOne from '../../assets/images/thumbnail-project-1-small.webp';
import thumbnailProjectTwo from '../../assets/images/thumbnail-project-2-small.webp';
import thumbnailProjectThree from '../../assets/images/thumbnail-project-3-small.webp';
import thumbnailProjectFour from '../../assets/images/thumbnail-project-4-small.webp';
import thumbnailProjectFive from '../../assets/images/thumbnail-project-5-small.webp';
import thumbnailProjectSix from '../../assets/images/thumbnail-project-6-small.webp';
import { ButtonLink } from '../Button/Button';
import { Project } from './Project/Project';
import styles from './Projects.module.css';

export const Projects = () => {
  return (
    <section className={styles.project}>
      <div className={styles.project__header}>
        <h2>Projects</h2>

        <ButtonLink link='#contact'>Contact Me</ButtonLink>
      </div>

      <ul className={styles.project__list}>
        <Project
          title='Design Portfolio'
          thumbnail={thumbnailProjectOne}
          skills={['HTML', 'CSS']}
        />
        <Project
          title='E-Learning Landing Page'
          thumbnail={thumbnailProjectTwo}
          skills={['HTML', 'CSS']}
        />
        <Project
          title='Todo Web App'
          thumbnail={thumbnailProjectThree}
          skills={['HTML', 'CSS', 'JavaScript']}
        />
        <Project
          title='Entertainment Web App'
          thumbnail={thumbnailProjectFour}
          skills={['HTML', 'CSS', 'JavaScript']}
        />
        <Project
          title='Memory Game'
          thumbnail={thumbnailProjectFive}
          skills={['HTML', 'CSS', 'JavaScript']}
        />
        <Project
          title='Art Gallery Showcase'
          thumbnail={thumbnailProjectSix}
          skills={['HTML', 'CSS', 'JavaScript']}
        />
      </ul>
    </section>
  );
};
