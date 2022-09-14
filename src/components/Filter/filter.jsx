import { PropTypes } from 'prop-types';
import { Label } from './filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleChange = value => {
    dispatch(filterChange(value));
  };
  return (
    <Label>
      Find contacts by name
      <input
        value={filter}
        onChange={e => handleChange(e.currentTarget.value)}
      />
    </Label>
  );
};

Filter.prototype = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
