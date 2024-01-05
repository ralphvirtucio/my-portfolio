import { Input } from '../Input/Input';
import { TextArea } from '../Input/TextArea';
import { PrimaryButton } from '../Button/Button';
import styles from './Contact.module.css';
import PropTypes from 'prop-types';

export const Contact = ({
  name,
  onChangeName,
  email,
  onChangeEmail,
  textarea,
  onChangeTextarea,
  onSubmitForm,
}) => {
  return (
    <section
      className={styles.contact}
      id='contact'>
      <div className={styles.contact__content}>
        <h2 className={styles.contact__heading}>Contact</h2>
        <p className={styles.contact__text}>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I&apos;ll get back to you as soon as possible.
        </p>
      </div>

      <form
        className={styles.contact__form}
        onSubmit={onSubmitForm}>
        <Input
          type='text'
          name='name'
          placeholder='Name'
          id='name'
          customInputStyle='input__name'
          value={name}
          onChange={onChangeName}
        />
        <Input
          type='email'
          name='email'
          placeholder='Email'
          id='email'
          customInputStyle='input__email'
          value={email}
          onChange={onChangeEmail}
        />
        <TextArea
          value={textarea}
          onChange={onChangeTextarea}
        />
        <PrimaryButton
          type='submit'
          buttonStyle='btn__primary--footer'>
          Send Message
        </PrimaryButton>
      </form>
    </section>
  );
};

Contact.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  textarea: PropTypes.string,
  onChangeName: PropTypes.func,
  onChangeEmail: PropTypes.func,
  onChangeTextarea: PropTypes.func,
  onSubmitForm: PropTypes.func,
};
