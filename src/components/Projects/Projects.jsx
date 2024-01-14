import thumbnailProjectOne from '../../assets/images/github-user-search-app.png';
import thumbnailProjectTwo from '../../assets/images/intro-component-with-signup-form-livid-nine.vercel.app_.png';
import thumbnailProjectThree from '../../assets/images/ralphvirtucio.github.io_fylo-landing-page-two-column_.png';
import thumbnailProjectFour from '../../assets/images/ralphvirtucio.github.io_intro-section-with-dropdown-nav_.png';
import thumbnailProjectFive from '../../assets/images/ralphvirtucio.github.io_news-homepage_.png';
import thumbnailProjectSix from '../../assets/images/tip-calculator-app-drab-five.vercel.app_.png';
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
          title='GitHub user search app'
          thumbnail={thumbnailProjectOne}
          skills={['HTML', 'CSS', 'SASS', 'JAVASCRIPT', 'REACT']}
          liveSite='https://dashing-torte-737eaf.netlify.app'
          repo='https://github.com/ralphvirtucio/github-search-user'
        />
        <Project
          title='Intro component with sign-up form'
          thumbnail={thumbnailProjectTwo}
          skills={['HTML', 'CSS', 'SASS', 'JAVASCRIPT', 'REACT']}
          liveSite='https://intro-component-with-signup-form-livid-nine.vercel.app'
          repo="https://github.com/ralphvirtucio/intro-component-with-signup-form"
        />
        <Project
          title='Fylo landing page with two column layout'
          thumbnail={thumbnailProjectThree}
          skills={['HTML', 'CSS', 'SASS']}
          liveSite="https://ralphvirtucio.github.io/fylo-landing-page-two-column"
          repo="https://github.com/ralphvirtucio/fylo-landing-page-two-column"
        />
        <Project
          title='Intro section with dropdown navigation'
          thumbnail={thumbnailProjectFour}
          skills={['HTML', 'CSS', 'SASS', 'JavaScript']}
          liveSite="https://ralphvirtucio.github.io/intro-section-with-dropdown-nav/"
          repo="https://github.com/ralphvirtucio/intro-section-with-dropdown-nav/tree/main"
        />
        <Project
          title='News homepage'
          thumbnail={thumbnailProjectFive}
          skills={['HTML', 'CSS', 'SASS', 'JavaScript']}
          liveSite="https://ralphvirtucio.github.io/news-homepage/"
          repo="https://github.com/ralphvirtucio/news-homepage"
        />
        <Project
          title='Tip calculator app'
          thumbnail={thumbnailProjectSix}
          skills={['HTML', 'CSS', 'SASS', 'JAVASCRIPT', 'REACT']}
          live='https://tip-calculator-app-drab-five.vercel.app/'
          repo="https://github.com/ralphvirtucio/tip-calculator-app"
        />
      </ul>
    </section>
  );
};
