import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';

const useUserSession = () => {
  const router = useRouter();
  const url = router.asPath;
  const { handleAuth, handleUserCameFrom, handleUserCameFromForOAuth } = useAuth();

  const setCurrentPathForOAuth = () => {
    handleUserCameFromForOAuth(url);
  };

  const signUp = () => {
    handleUserCameFrom(url);
  };

  const signIn = () => {
    handleUserCameFrom(url);
  };

  const logout = () => {
    const token = localStorage.getItem('authToken');

    if (token) {
      localStorage.removeItem('authToken');
      handleAuth(undefined);
      router.push('/');
    }
  };

  return { signUp, signIn, logout, setCurrentPathForOAuth };
};

export default useUserSession;
