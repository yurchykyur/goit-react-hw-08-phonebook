import React, { lazy, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'components/redux/auth/operations';
import { useAuth } from 'hooks';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';

const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/contacts'));

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
              <Route index element={<HomePage />} />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    component={<LoginPage />}
                    redirectTo="/contacts"
                  />
                }
              />
              <Route
                path="/regisration"
                element={
                  <RestrictedRoute
                    component={<RegisterPage />}
                    redirectTo="/contacts"
                  />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute
                    component={<ContactsPage />}
                    redirectTo="/login"
                  />
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
