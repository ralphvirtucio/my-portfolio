import { Contact } from '../components/Contact/Contact';
import { useState } from 'react';

export const ContactContainer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleChangeName({ target }) {
    const newName = target.value;

    setName(newName);
  }

  function handleChangeEmail({ target }) {
    const newEmail = target.value;
    setEmail(newEmail);
  }

  function handleSubmitContactForm(e) {
    e.preventDefault();
  }

  return <Contact />;
};
