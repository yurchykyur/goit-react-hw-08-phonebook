import { useDispatch, useSelector } from 'react-redux';

import { nanoid } from 'nanoid';

import { FilterWrapper, FilterInputLabel, FilterInput } from './Filter.styled';
import { filterContact } from 'components/redux/filters/filterSlice';
import { filterSelectors } from 'components/redux/filters';

export default function Filter() {
  const filter = useSelector(filterSelectors.selectFilter);
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(filterContact(e.currentTarget.value));
  };

  const inputId = nanoid();
  return (
    <FilterWrapper>
      <FilterInputLabel htmlFor={inputId}>
        Find contacts by name:
        <FilterInput
          type="text"
          value={filter}
          id={inputId}
          onChange={onChangeFilter}
        />
      </FilterInputLabel>
    </FilterWrapper>
  );
}
