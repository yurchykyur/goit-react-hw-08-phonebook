import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import ButtonAppBar from 'components/AppBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout() {
  return (
    <div>
      <ButtonAppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ToastContainer />
    </div>
  );
}
