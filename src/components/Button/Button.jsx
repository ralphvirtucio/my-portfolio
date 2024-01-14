import styles from './Button.module.css';
import PropTypes from 'prop-types';

export const ButtonLink = ({ children, link = '#' }) => {
  return (
    <a
      href={link}
      target='_blank'
      rel='noreferrer'
      className={styles['primary__btn-link']}>
      {children}
    </a>
  );
};

ButtonLink.propTypes = {
  children: PropTypes.node,
  link: PropTypes.string,
};

export const PrimaryButton = ({ children, type = 'button', buttonStyle }) => {
  return (
    <button
      type={type}
      className={`${styles[`btn__primary`]} ${styles[buttonStyle]}`}>
      {children}
    </button>
  );
};

PrimaryButton.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  buttonStyle: PropTypes.string,
};
