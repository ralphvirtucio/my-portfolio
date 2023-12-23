// export const Button = () => {
//   return <button>Contact Me</button>;
// };

import styles from './Button.module.css';
import PropTypes from 'prop-types';

export const ButtonLink = ({ children, link = '#' }) => {
  return (
    <a
      href={link}
      className={styles['btn-link__contact-me']}>
      {children}
    </a>
  );
};

ButtonLink.propTypes = {
  children: PropTypes.node,
  link: PropTypes.string,
};
