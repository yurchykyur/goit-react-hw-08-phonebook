import { useSelector } from 'react-redux';

import { PhonebookList } from './ContactList.styled';

import { filterSelectors } from 'components/redux/filters';
import PhonebookListItem from 'components/ContactListItem';

export default function ContactList() {
  const filteredContacts = useSelector(filterSelectors.selectFilteredContacts);

  return (
    <>
      <PhonebookList>
        {filteredContacts.map(contact => (
          <PhonebookListItem key={contact.id} {...contact} />
        ))}
      </PhonebookList>
    </>
  );
}
