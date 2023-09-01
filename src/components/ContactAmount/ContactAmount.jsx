import { useSelector } from 'react-redux';

import { TotalContactsText, TotalContactsNum } from './ContactAmount.styled';

import { contactsSelectors } from 'components/redux/contacts';

export default function ContactAmount() {
  const contacts = useSelector(contactsSelectors.selectContacts);

  const contactsAmount = contacts.length;

  return (
    <TotalContactsText>
      Contacts amount: <TotalContactsNum>{contactsAmount}</TotalContactsNum>
    </TotalContactsText>
  );
}
