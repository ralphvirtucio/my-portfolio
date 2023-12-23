import githubLogo from '../../assets/images/icon-github.svg';
import frontendMentorLogo from '../../assets/images/icon-frontend-mentor.svg';
import linkedInLogo from '../../assets/images/icon-linkedin.svg';
import twitterLogo from '../../assets/images/icon-twitter.svg';
import styles from './SocialMediaBar.module.css';
import PropTypes from 'prop-types';

export const SocialMediaBar = ({ socialMediaListStyle }) => {
  return (
    <ul className={styles[socialMediaListStyle]}>
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
  );
};

SocialMediaBar.propTypes = {
  socialMediaListStyle: PropTypes.string,
};
