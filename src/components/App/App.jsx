import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Oval } from 'react-loader-spinner';

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import ContactAmount from 'components/ContactAmount';
import Notification from 'components/Notification';

import {
  AppContainer,
  MainTitle,
  SecondTitle,
  OvalWrapper,
} from './App.styled';

import {
  contactsOperations,
  contactsSelectors,
} from 'components/redux/contacts';
import { Link, Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Contacts from 'pages/contacts';

export default function App() {
  const contacts = useSelector(contactsSelectors.selectContacts);
  const isLoading = useSelector(contactsSelectors.selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      {/* <nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/login">Login</Link>
        <Link to="/regisration">Regisration</Link>
        <Link to="/contacts">Contacts</Link>
      </nav> */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/regisration" element={<Register />} />
          <Route path="/contacts" element={<Contacts />} />

          <Route path="*" element={<h1> 404 Not Found</h1>} />
        </Route>
      </Routes>

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
        <ToastContainer />
      </AppContainer>
    </>
  );
}
