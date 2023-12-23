import PropTypes from 'prop-types';
import styles from './Input.module.css';

export const Input = ({ type, placeholder, name, id }) => {
  return (
    <div className={styles.form__control}>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
};
