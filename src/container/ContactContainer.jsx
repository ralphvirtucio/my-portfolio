import { Contact } from '../components/Contact/Contact';
import { useState } from 'react';

export const ContactContainer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [textArea, setTextArea] = useState('');

  function handleChangeName({ target }) {
    const newName = target.value;

    setName(newName);
  }

  function handleChangeEmail({ target }) {
    const newEmail = target.value;
    setEmail(newEmail);
  }

  function handleChangeTextArea({ target }) {
    const newText = target.value;

    setTextArea(newText);
  }

  function handleSubmitContactForm(e) {
    e.preventDefault();

    if(!name || !email || !textArea) {
        alert('Field is empty')
    }

    const contactInfo = {
      name,
      email,
      textArea,
    };

    alert(JSON.stringify(contactInfo));

    console.log(contactInfo);

    setName('');
    setEmail('');
    setTextArea('');
  }

  return (
    <Contact
      name={name}
      email={email}
      textarea={textArea}
      onChangeName={handleChangeName}
      onChangeEmail={handleChangeEmail}
      onChangeTextarea={handleChangeTextArea}
      onSubmitForm={handleSubmitContactForm}
    />
  );
};
