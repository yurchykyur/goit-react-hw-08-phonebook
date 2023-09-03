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
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {!isRefreshing && (
        <>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    component={<Login />}
                    redirectTo="/contacts"
                  />
                }
              />
              <Route
                path="/regisration"
                element={
                  <RestrictedRoute
                    component={<Register />}
                    redirectTo="/contacts"
                  />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute component={<Contacts />} redirectTo="/login" />
                }
              />

              <Route path="*" element={<h1> 404 Not Found</h1>} />
            </Route>
          </Routes>
        </>
      )}
    </>
  );
}
