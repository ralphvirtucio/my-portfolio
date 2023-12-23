import styles from './TextArea.module.css';

export const TextArea = () => {
  return (
    <div className={styles.form__control}>
      <textarea
        className={styles.textarea}
        name='message'
        id='message'
        cols='30'
        rows='3'
        placeholder='Message'></textarea>
    </div>
  );
};
