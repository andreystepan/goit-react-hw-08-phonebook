import { ContactForm } from 'components/contactForm/contactForm';
import { ContactList } from 'components/contacts/contactList/contactList';
import { Filter } from 'components/Filter/filter';

export const Contacts = () => {
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};
