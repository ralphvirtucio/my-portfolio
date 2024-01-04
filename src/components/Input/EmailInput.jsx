import styles from './Input.module.css';

export const EmailInput = () => {
  const isEmailInvalid = false;

  return (
    <div className={`${styles.form__control} ${styles['email']}`}>
      <div className={styles['form__control--email']}>
        <input
          type='email'
          placeholder='Email'
          id='email'
          name='email'
        />
        {isEmailInvalid && (
          <span className={styles.invalid__icon}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='16'
              width='2'
              viewBox='0 0 64 512'
              aria-hidden='true'>
              {/* !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
              <path d='M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM32 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z' />
            </svg>
          </span>
        )}
      </div>
      {isEmailInvalid && (
        <span className={styles.invalid__text}>Sorry, invalid format here</span>
      )}
    </div>
  );
};