import {
  ContactItemName,
  ContactItemNum,
  ContactItemWrapper,
  DeleteBtn,
  ListElement,
} from 'components/ContactList/ContactList.styled';
import {
  contactsOperations,
  contactsSelectors,
} from 'components/redux/contacts';
import { useDispatch, useSelector } from 'react-redux';

export default function PhonebookListItem({ id, name, number }) {
  const dispatch = useDispatch();
  const isDeleting = useSelector(contactsSelectors.selectIsLoading);

  const deleteContacts = id => {
    dispatch(contactsOperations.fetchDeleteContacts(id));
  };

  return (
    <ListElement>
      <ContactItemWrapper>
        <ContactItemName>{name}</ContactItemName>
        <ContactItemNum href={`tel:${number}`}>{number}</ContactItemNum>
        <DeleteBtn onClick={() => deleteContacts(id)} disabled={isDeleting}>
          Delete
        </DeleteBtn>
      </ContactItemWrapper>
    </ListElement>
  );
}
