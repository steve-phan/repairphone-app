import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import { Navigate } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Login from './pages/SignIn';
import Register from './pages/SignUp';

const routes = [
  {
    path: 'app',
    element: <Layout />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },

      { path: '*', element: <Navigate to='/404' /> },
    ],
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to='/app/dashboard' /> },
      { path: '*', element: <Navigate to='/404' /> },
    ],
  },
];

export default routes;
