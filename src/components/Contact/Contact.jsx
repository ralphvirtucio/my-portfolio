import styles from './Contact.module.css';

export const Contact = () => {
  return (
    <section>
      <div className={styles.contact__content}>
        <h2 className={styles.contact__heading}>Contact</h2>
        <p className={styles.contact__text}>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I&apos;ll get back to you as soon as possible.
        </p>
      </div>

      <form>
        <input
          type='text'
          name='name'
          placeholder='Name'
          id='name'
        />
        <input
          type='email'
          name='email'
          placeholder='Email'
          id='email'
        />
        <textarea
          name='message'
          id='message'
          cols='30'
          rows='10'
          placeholder='Message'></textarea>

        <button type='submit'>Send Message</button>
      </form>
    </section>
  );
};
