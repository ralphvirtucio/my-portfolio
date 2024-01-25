
import thumbnailMobile1 from '../../assets/images/projects-mobile/github-user-search-mobile.png';
import thumbnailMobile2 from '../../assets/images/projects-mobile/intro-signup-form-mobile.png';
import thumbnailMobile3 from '../../assets/images/projects-mobile/fylo-twolayout-mobile.png';
import thumbnailMobile4 from '../../assets/images/projects-mobile/introduction-hamburger-mobile.png';
import thumbnailMobile5 from '../../assets/images/projects-mobile/job-listing-mobile.png';
import thumbnailMobile6 from '../../assets/images/projects-mobile/tip-calculator-mobile.png';
import thumbnailDesktop1 from '../../assets/images/projects-desktop/github-user-search-desktop.png';
import thumbnailDesktop2 from '../../assets/images/projects-desktop/intro-signup-form-desktop.png';
import thumbnailDesktop3 from '../../assets/images/projects-desktop/fylo-twolayout-desktop.png';
import thumbnailDesktop4 from '../../assets/images/projects-desktop/introduction-hamburger-desktop.png';
import thumbnailDesktop5 from '../../assets/images/projects-desktop/job-listing-desktop.png';
import thumbnailDesktop6 from '../../assets/images/projects-desktop/tip-calculator-desktop.png';

import { ButtonLink, ContactLink } from '../Button/Button';
import { Project } from './Project/Project';
import styles from './Projects.module.css';

export const Projects = () => {
  return (
    <section className={styles.project}>
      <div className={styles.project__header}>
        <h2>Projects</h2>

        <ContactLink link='#contact'>Contact Me</ContactLink>
      </div>

      <ul className={styles.project__list}>
        <Project
          title='GitHub user search app'
          thumbnailMobile={thumbnailMobile1}
          thumbnailDesktop={thumbnailDesktop1}
          skills={['HTML', 'CSS', 'SASS', 'JAVASCRIPT', 'REACT']}
          liveSite='https://dashing-torte-737eaf.netlify.app'
          repo='https://github.com/ralphvirtucio/github-search-user'
        />
        <Project
          title='Intro component with sign-up form'
          thumbnailMobile={thumbnailMobile2}
          thumbnailDesktop={thumbnailDesktop2}
          skills={['HTML', 'CSS', 'SASS', 'JAVASCRIPT', 'REACT']}
          liveSite='https://intro-component-with-signup-form-livid-nine.vercel.app'
          repo='https://github.com/ralphvirtucio/intro-component-with-signup-form'
        />
        <Project
          title='Fylo landing page with two column layout'
          thumbnailMobile={thumbnailMobile3}
          thumbnailDesktop={thumbnailDesktop3}
          skills={['HTML', 'CSS', 'SASS']}
          liveSite='https://ralphvirtucio.github.io/fylo-landing-page-two-column'
          repo='https://github.com/ralphvirtucio/fylo-landing-page-two-column'
        />
        <Project
          title='Intro section with dropdown navigation'
          thumbnailMobile={thumbnailMobile4}
          thumbnailDesktop={thumbnailDesktop4}
          skills={['HTML', 'CSS', 'SASS', 'JavaScript']}
          liveSite='https://ralphvirtucio.github.io/intro-section-with-dropdown-nav/'
          repo='https://github.com/ralphvirtucio/intro-section-with-dropdown-nav/tree/main'
        />
        <Project
          title='Job Listing'
          thumbnailMobile={thumbnailMobile5}
          thumbnailDesktop={thumbnailDesktop5}
          skills={['HTML', 'CSS', 'REACT', 'JavaScript']}
          liveSite='https://visionary-granita-c75820.netlify.app/'
          repo='https://github.com/ralphvirtucio/job-listings-component'
        />
        <Project
          title='Tip calculator app'
          thumbnailMobile={thumbnailMobile6}
          thumbnailDesktop={thumbnailDesktop6}
          skills={['HTML', 'CSS', 'SASS', 'JAVASCRIPT', 'REACT']}
          liveSite='https://tip-calculator-app-drab-five.vercel.app/'
          repo='https://github.com/ralphvirtucio/tip-calculator-app'
        />
      </ul>
    </section>
  );
};
