import PropTypes from 'prop-types';
import styles from './Project.module.css';
import { ButtonLink } from '../../Button/Button';

export const Project = ({ title, thumbnailMobile, thumbnailDesktop, skills, liveSite, repo }) => {
  const mappedSkills = skills.map((skill, i) => {
    return <li key={`${skill}-${i}`}>{skill}</li>;
  });



  return (
    <li className={styles.project}>
      <div className={styles.project__hoverable}>
        <div className={styles['project__cta--desktop']}>
        <ButtonLink link={liveSite}>View Project</ButtonLink>
        <ButtonLink link={repo}>View Code</ButtonLink>
        </div>
        <picture>
            <source
              media='(min-width: 64rem)'
              srcSet={thumbnailDesktop}
            />

            <source
              media='(min-width: 48rem)'
              srcSet={thumbnailMobile}
            />
           
            <img
              src={thumbnailMobile}
              alt={title}
            />
          </picture> 
      </div>
      <div className={styles.project__content}>
        <h2 className={styles.project__title}>{title}</h2>
        <ul className={styles['project__used-skills']}>{mappedSkills}</ul>
      </div>
      <div className={styles.project__cta}>
        <ButtonLink link={liveSite}>View Project</ButtonLink>
        <ButtonLink link={repo}>View Code</ButtonLink>
      </div>
    </li>
  );
};

Project.propTypes = {
  title: PropTypes.string,
  thumbnailMobile: PropTypes.string,
  thumbnailDesktop: PropTypes.string,
  skills: PropTypes.array,
  liveSite: PropTypes.string,
  repo: PropTypes.string
};
