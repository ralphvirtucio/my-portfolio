import PropTypes from 'prop-types';
import styles from './Project.module.css';
import { ButtonLink } from '../../Button/Button';

export const Project = ({ title, thumbnail, skills }) => {
  const mappedSkills = skills.map((skill, i) => {
    return <li key={`${skill}-${i}`}>{skill}</li>;
  });

  return (
    <li className={styles.project}>
      <img
        src={thumbnail}
        alt={title}
      />
      <div className={styles.project__content}>
        <h2 className={styles.project__title}>{title}</h2>
        <ul className={styles['project__used-skills']}>{mappedSkills}</ul>
      </div>
      <div className={styles.project__cta}>
        <ButtonLink>View Project</ButtonLink>
        <ButtonLink>View Code</ButtonLink>
      </div>
    </li>
  );
};

Project.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  skills: PropTypes.array,
};
