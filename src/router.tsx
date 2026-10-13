import { createBrowserRouter } from 'react-router';
import { authMiddleware } from './auth/middleware';

function Noop() {
  return <h1>Hello world</h1>;
}

export const router = createBrowserRouter([
  {
    path: '/',
    middleware: [authMiddleware],
    children: [
      {
        path: 'login',
        Component: Noop,
      },
    ],
  },
]);
