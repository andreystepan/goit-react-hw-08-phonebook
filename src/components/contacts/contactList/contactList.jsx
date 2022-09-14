import { useFetchContactsQuery } from 'redux/contacts/contactsApi'; 
import { ContactItem } from '../contactItem/contactItem'; 
import { PropTypes } from 'prop-types';
import { ListContacts } from './ContactList.styled';
import { useSelector } from 'react-redux/es/exports';

export const ContactList = () => {
  const { data: contacts } = useFetchContactsQuery();
  const filter = useSelector(state => state.filter);

  const normalizedFilter = filter.toLowerCase();
  const filtered = contacts?.filter(contact =>
    contact.name.includes(normalizedFilter)
  );

  return (
    <ListContacts>
      {contacts &&
        filtered.map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))}
    </ListContacts>
  );
};

ContactList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
