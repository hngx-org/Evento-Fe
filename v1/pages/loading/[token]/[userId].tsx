'use client';

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSession } from '@/context/sessionProvider';
import { useAuth } from '@/context/AuthContext';

const LnkingGoogle: React.FC = () => {
  const { userCameFrom, userCameFromForOAuth } = useAuth();
  const { login } = useSession();
  const router = useRouter();
  const { token, userId } = router.query;

  const newToken = token as string;
  const newUser = userId as string;

  login(newToken, newUser);

  useEffect(() => {
    const setTokensAndRedirect = () => {
      if (token && userId) {
        localStorage.setItem('authToken', token as string);
        localStorage.setItem('userId', userId as string);

        router.push(userCameFrom || '/dashboard');
      } else {
        router.push(userCameFromForOAuth || '/auth/sign-in');
      }
    };

    setTokensAndRedirect();
  }, [token, userId, router]);

  return <div className="items-center justify-center">linking your google account</div>;
};

export default LnkingGoogle;
