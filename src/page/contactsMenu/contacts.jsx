import { ContactForm } from 'components/ContactForm/contactForm';
import { ContactList } from 'components/Contacts/ContactList/contactList';
import { Filter } from 'components/Filter/filter';
import { Box } from '@mui/material';
import { Helmet } from 'react-helmet';

export const Contacts = () => {
  return (
    <Box
      px="25%"
      sx={{
        mt: 2,
      }}
    >
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <ContactForm />
      <Filter />
      <ContactList />
    </Box>
  );
};
