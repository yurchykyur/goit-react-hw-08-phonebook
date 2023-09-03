import React, { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Contacts from 'pages/contacts';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'components/redux/auth/operations';
import { useAuth } from 'hooks';

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <>
      {!isRefreshing && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/regisration" element={<Register />} />
            <Route path="/contacts" element={<Contacts />} />

            <Route path="*" element={<h1> 404 Not Found</h1>} />
          </Route>
        </Routes>
      )}
    </>
  );
}
