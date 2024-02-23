import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

// const Logout = () => {
//   const router = useRouter();

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       localStorage.clear();

//       router.push('/');
//     }
//   }, [router]);

//   return null;
// };

// export default Logout;

//   const logout = () => {
//     const token = localStorage.getItem('zpt');

//     if (token) {
//       localStorage.removeItem('zpt');
//       toast({
//         message: 'Logged out',
//         type: 'success',
//         theme: 'light',
//       });
//       handleAuth(undefined);
//       router.push('/');
//     }
//   };

// export function logoutUser = () => {
//   const router = useRouter();
//   const token = localStorage.getItem('authToken');
//   const userId = localStorage.getItem('userId');

//   try {
//     if (token && userId) {
//       localStorage.removeItem('authToken');
//       localStorage.removeItem('userId');
//       toast.success('Logout successful');
//     }
//   } catch (error) {
//     console.error('Error during logout:', error);
//     toast.error('An error occurred during logout');
//   }

//   router.push('/');
// };

function logoutUser() {
  const token = localStorage.getItem('authToken');
  const userId = localStorage.getItem('userId');

  try {
    if (token && userId) {
      localStorage.clear();
      localStorage.removeItem('authToken');
      localStorage.removeItem('userId');
      toast.success('Logout successful');
    }
  } catch (error) {
    console.error('Error during logout:', error);
    toast.error('An error occurred during logout');
  }
}

export default logoutUser;
