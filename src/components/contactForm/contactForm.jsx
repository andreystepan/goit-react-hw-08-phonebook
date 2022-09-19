import { PropTypes } from 'prop-types';
import { useState } from 'react';
import {
  useFetchContactsQuery,
  useCreateContactMutation,
} from 'redux/contacts/contactsApi';
import { nanoid } from 'nanoid';

import { Form, Label } from './contactForm.styled';
import { TextField, Button } from '@mui/material';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [createContact] = useCreateContactMutation();
  const { data: contacts } = useFetchContactsQuery();
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    const existingContact = contacts.find(contact => contact.name === name);
    if (existingContact) {
      alert(`${name} is olready in contacts`);
      return;
    }
    e.preventDefault();
    createContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}>
        Name
        <TextField
          label="Name"
          variant="outlined"
          id={nameInputId}
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label htmlFor={numberInputId}>
        Number
        <TextField
          label="Number"
          variant="outlined"
          id={numberInputId}
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button
        variant="contained"
        color="success"
        type="submit"
        sx={{
          mx: 'auto',
        }}
      >
        Add contact
      </Button>

      {/* <BtnAddContact type="submit">Add contact</BtnAddContact> */}
    </Form>
  );
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
