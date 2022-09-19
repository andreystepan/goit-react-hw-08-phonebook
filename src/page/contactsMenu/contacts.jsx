import { ContactForm } from 'components/ContactForm/contactForm';
import { ContactList } from 'components/Contacts/ContactList';
import { Filter } from 'components/Filter';
import { Box } from '@mui/material';

export const Contacts = () => {
  return (
    <Box
      px="25%"
      sx={{
        mt: 2,
      }}
    >
      <ContactForm />
      <Filter />
      <ContactList />
    </Box>
  );
};
