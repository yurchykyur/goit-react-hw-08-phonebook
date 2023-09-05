import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import {
  AppContainer,
  MainTitle,
  SecondTitle,
} from 'components/App/App.styled';

import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import ContactAmount from 'components/ContactAmount';
import Notification from 'components/Notification';

import {
  contactsOperations,
  contactsSelectors,
} from 'components/redux/contacts';

import { useAuth } from 'hooks';
import { Spinner } from 'service';

export default function Contacts() {
  const contacts = useSelector(contactsSelectors.selectContacts);
  const isLoading = useSelector(contactsSelectors.selectIsLoading);
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      {!isRefreshing && (
        <AppContainer>
          <MainTitle>Phonebook</MainTitle>
          <ContactForm />
          <SecondTitle>Contacts</SecondTitle>
          <Filter />
          <ContactAmount></ContactAmount>
          {contacts.length > 0 ? (
            <ContactList />
          ) : (
            <Notification
              message={'There are no contacts in your phonebook'}
            ></Notification>
          )}
          {isLoading && Spinner.spinnerOval()}
        </AppContainer>
      )}
    </>
  );
}
