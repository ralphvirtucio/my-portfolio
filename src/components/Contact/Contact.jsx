import { Input } from '../Input/Input';
import { TextArea } from '../Input/TextArea';
import { ButtonLink, PrimaryButton } from '../Button/Button';
import styles from './Contact.module.css';

export const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.contact__content}>
        <h2 className={styles.contact__heading}>Contact</h2>
        <p className={styles.contact__text}>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I&apos;ll get back to you as soon as possible.
        </p>
      </div>

      <form className={styles.contact__form}>
        <Input
          type='text'
          name='name'
          placeholder='Name'
          id='name'
        />
        <Input
          type='email'
          name='email'
          placeholder='Email'
          id='Email'
        />
        <TextArea />
        <PrimaryButton
          type='submit'
          buttonStyle='btn__primary--footer'>
          Send Message
        </PrimaryButton>
      </form>
    </section>
  );
};
