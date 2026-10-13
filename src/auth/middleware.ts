import { getUserId } from './auth';
import { type MiddlewareFunction, redirect } from 'react-router';

export const authMiddleware: MiddlewareFunction = () => {
  const userId = getUserId();

  if (!userId) throw redirect('/login');
};
