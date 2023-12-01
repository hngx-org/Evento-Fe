import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';

const useUserSession = () => {
  const router = useRouter();
  const url = router.asPath;
  const { handleAuth, handleUserCameFrom, handleUserCameFromForOAuth } = useAuth();

  const setCurrentPathForOAuth = () => {
    handleUserCameFromForOAuth(url);
  };

  const setRouteAndRedirect = (redirectPath: string) => {
    handleUserCameFrom(url);
    router.push(redirectPath);
  };

  const signUp = () => {
    setRouteAndRedirect('/');
  };

  const signIn = () => {
    setRouteAndRedirect('/');
  };

  const logout = () => {
    const token = localStorage.getItem('authToken');

    if (token) {
      localStorage.removeItem('authToken');
      toast.success('Logged out', { theme: 'light' });
      handleAuth(undefined);
      router.push('/');
    }
  };

  return { signUp, signIn, logout, setCurrentPathForOAuth };
};

export default useUserSession;
