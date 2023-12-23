import githubLogo from '../../assets/images/icon-github.svg';
import frontendMentorLogo from '../../assets/images/icon-frontend-mentor.svg';
import linkedInLogo from '../../assets/images/icon-linkedin.svg';
import twitterLogo from '../../assets/images/icon-twitter.svg';
import styles from './SocialMediaBar.module.css';
import PropTypes from 'prop-types';

export const SocialMediaBar = ({ children, customSocialMediaStyle }) => {
  return (
    <div
      className={`${styles['social-media__bar']} ${styles[customSocialMediaStyle]}`}>
      {children}

      <ul className={styles['social-media-link__list']}>
        <a href='#'>
          <img
            src={githubLogo}
            alt='Github'
          />
        </a>
        <a href='#'>
          <img
            src={frontendMentorLogo}
            alt='Frontend Mentor'
          />
        </a>
        <a href=''>
          <img
            src={linkedInLogo}
            alt='LinkedIn'
          />
        </a>
        <a href=''>
          <img
            src={twitterLogo}
            alt='Twitter'
          />
        </a>
      </ul>
    </div>
  );
};

SocialMediaBar.propTypes = {
  children: PropTypes.node,
  customSocialMediaStyle: PropTypes.string,
};
