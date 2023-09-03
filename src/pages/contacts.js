import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Oval } from 'react-loader-spinner';

import {
  AppContainer,
  MainTitle,
  SecondTitle,
  OvalWrapper,
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

export default function Contacts() {
  const contacts = useSelector(contactsSelectors.selectContacts);
  const isLoading = useSelector(contactsSelectors.selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
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
        {isLoading && (
          <OvalWrapper>
            <Oval
              height={80}
              width={80}
              color="#534da9"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#4fa94d"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </OvalWrapper>
        )}
      </AppContainer>

      {/* 
      <TaskEditor />
      <div>{isLoading && 'Request in progress...'}</div>
      <TaskList /> */}
    </>
  );
}
