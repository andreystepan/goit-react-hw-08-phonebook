import { ItemContact, BtnDelete } from './ContactItem.styled';
import { PropTypes } from 'prop-types';
import { useDeleteContactMutation } from 'redux/contacts/contactsApi';

export const ContactItem = ({ id, name, number }) => {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <ItemContact>
      {name} : {number}
      <BtnDelete onClick={() => deleteContact(id)}>Delete</BtnDelete>
    </ItemContact>
  );
};

ContactItem.prototype = {
  id: PropTypes.string.isRequried,
  name: PropTypes.string.isRequried,
  number: PropTypes.string.isRequried,
};
