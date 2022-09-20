import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { operations } from 'redux/auth/operations';
import { PublicRoute } from 'routes/PublicRoute';
import { PrivateRoute } from 'routes/PrivateRoute';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/selectors';

const Contacts = lazy(() =>
  import('../page/contactsMenu').then(module => ({
    ...module,
    default: module.Contacts,
  }))
);

const Login = lazy(() =>
  import('../page/login/login').then(module => ({
    ...module,
    default: module.Login,
  }))
);

const Register = lazy(() =>
  import('../page/register/register').then(module => ({
    ...module,
    default: module.Register,
  }))
);

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshingUser = useSelector(authSelectors.getIsRefreshingUser);

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshingUser ? null : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/register"
              element={
                <PublicRoute
                  restricted
                  redirectTo="/contacts"
                  component={<Register />}
                />
              }
            />

            <Route
              path="/login"
              element={
                <PublicRoute
                  restricted
                  redirectTo="/contacts"
                  component={<Login />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      )}
    </>
  );
};
