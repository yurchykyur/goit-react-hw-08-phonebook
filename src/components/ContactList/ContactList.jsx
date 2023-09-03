import { useSelector } from 'react-redux';

import { PhonebookList } from './ContactList.styled';

import { filterSelectors } from 'components/redux/filters';
import PhonebookListItem from 'components/ContactListItem';
import { useAuth } from 'hooks';

export default function ContactList() {
  const { isRefreshing } = useAuth();
  const filteredContacts = useSelector(filterSelectors.selectFilteredContacts);

  return (
    <>
      {!isRefreshing && (
        <PhonebookList>
          {filteredContacts.map(contact => (
            <PhonebookListItem key={contact.id} {...contact} />
          ))}
        </PhonebookList>
      )}
    </>
  );
}
