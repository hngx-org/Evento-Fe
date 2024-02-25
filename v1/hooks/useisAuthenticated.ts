// import { useMutation } from 'react-query';
// import { useEffect, useState } from 'react';
// import { authorizeToken } from '@/http/authapi';

// const useIsAuthenticated = () => {
//   const [authenticatedState, setAuthenticatedState] = useState<boolean>();

//   const { mutate } = useMutation(authorizeToken, {
//     onSuccess: (res) => {
//       if (res.status === 200) {
//         // console.log(res);
//         setAuthenticatedState(true);
//         return true;
//       }
//     },
//     onError: (res: any) => {
//       const error = JSON.parse(res);
//       if (error.status === 401 || error.status === 400) {
//         // console.log(error);
//         setAuthenticatedState(false);
//         return false;
//       }
//     },
//   });

//   useEffect(() => {
//     let token = '';

//     if (typeof window !== 'undefined') {
//       token = localStorage.getItem('authToken') as string;
//     }
//     mutate({ token: token as string });
//   }, []);

//   return { mutate, authenticatedState };
// };

// export default useIsAuthenticated;

import { useMutation, useQueryClient } from 'react-query';
import { useEffect, useState } from 'react';
import { authorizeToken } from '@/http/authapi';
import { AuthorizationResponse, IsAuthenticatedResult, CustomError } from '@/@types';

const useIsAuthenticated = (): IsAuthenticatedResult => {
  const [authenticatedState, setAuthenticatedState] = useState<boolean | undefined>();
  const queryClient = useQueryClient();

  const { mutate } = useMutation<AuthorizationResponse, CustomError, string>(authorizeToken, {
    onSuccess: () => {
      setAuthenticatedState(true);
    },
    onError: (error) => {
      if (error?.status === 401 || error?.status === 400) {
        setAuthenticatedState(false);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries('someQueryKey');
    },
  });

  useEffect(() => {
    const token = localStorage.getItem('authToken');

    if (token) {
      mutate(token);
    } else {
      setAuthenticatedState(false);
    }
  }, [mutate]);
  return { mutate, authenticatedState };
};

export default useIsAuthenticated;
