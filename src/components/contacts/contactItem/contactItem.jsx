import { ItemContact } from './contactItem.styled';
import { PropTypes } from 'prop-types';
import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
import { Delete } from '@mui/icons-material';
import { Button } from '@mui/material';

export const ContactItem = ({ id, name, number }) => {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <ItemContact>
      {name} : {number}
      <Button
        variant="outlined"
        onClick={() => deleteContact(id)}
        startIcon={<Delete />}
      >
        Delete
      </Button>
    </ItemContact>
  );
};

ContactItem.prototype = {
  id: PropTypes.string.isRequried,
  name: PropTypes.string.isRequried,
  number: PropTypes.string.isRequried,
};
