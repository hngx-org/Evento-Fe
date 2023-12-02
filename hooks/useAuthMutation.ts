// import { MutationFunction, useMutation, UseMutationOptions } from '@tanstack/react-query';

// /**
//  * @typedef {Object} TData - shape of the data returned from endpoint
//  * @property {unknown} TData.data - the data returned from the endpoint
//  *
//  * @typedef {Object} TError - shape of error returned from endpoint
//  * @property {unknown} TError.error - the error returned from the endpoint
// //  *
// //  * @typedef {Object} TVariables - shape of variables being passed to the mutationfn
// //  *
// //  * @typedef {Object} TContext
// //  */

// // const useAuthMutation = <TData = unknown, TError = unknown, TVariables = void, TContext = unknown>(
// //   mutationFn: MutationFunction<TData, TVariables>,
// //   options?: Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'mutationFn'>,
// // ) => {
// //   const mutation = useMutation(mutationFn, options);

// //   return mutation;
// // };

// // export default useAuthMutation;

// import { MutationFunction, useMutation, UseMutationOptions } from '@tanstack/react-query';

// /**
//  * Shape of the data returned from the endpoint
//  */
// type TData = unknown;

// /**
//  * Shape of the error returned from the endpoint
//  */
// type TError = unknown;

// /**
//  * Shape of variables being passed to the mutation function
//  */
// type TVariables = void;

// /**
//  * Shape of the context
//  */
// type TContext = unknown;

// /**
//  * Custom hook for authentication-related mutations using React Query
//  *
//  * @param {MutationFunction<TData, TVariables>} mutationFn - The mutation function
//  * @param {UseMutationOptions<TData, TError, TVariables, TContext>} options - Additional options for useMutation
//  * @returns {UseMutation<TData, TError, TVariables, TContext>} - The mutation object
//  */
// const useAuthMutation = (
//   mutationFn: MutationFunction<TData, TVariables>,
//   options?: UseMutationOptions<TData, TError, TVariables, TContext>,
// ) => {
//   const mutation = useMutation(mutationFn, options);

//   return mutation;
// };

// export default useAuthMutation;

// import { MutationFunction, useMutation, UseMutationOptions } from '@tanstack/react-query';

// type TData = unknown;
// type TError = unknown;
// type TVariables = void;
// type TContext = unknown;

// type AuthMutationOptions = UseMutationOptions<TData, TError, TVariables, TContext>;

// const useAuthMutation = (
//   mutationFn: MutationFunction<TData, TVariables>,
//   options?: AuthMutationOptions,
// ) => {
//   const mutation = useMutation<TData, TError, TVariables, TContext>(mutationFn, options);

//   return mutation;
// };

// export default useAuthMutation;

// import { MutationFunction, useMutation, UseMutationOptions } from '@tanstack/react-query';

// type TData = unknown;
// type TError = unknown;
// type TVariables = void;
// type TContext = unknown;

// type AuthMutationOptions = UseMutationOptions<TData, TError, TVariables, TContext>;

// const useAuthMutation = (
//   mutationFn: MutationFunction<TData, TVariables>,
//   options?: AuthMutationOptions,
// ) => {
//   const mutation = useMutation<TData, TError, TVariables, TContext>(mutationFn, options as UseMutationOptions<TData, TError, TVariables, TContext>);

//   return mutation;
// };

// export default useAuthMutation;

import { MutationFunction, useMutation, UseMutationOptions } from 'react-query';

type TData = unknown;
type TError = unknown;
type TVariables = void;
type TContext = unknown;

type AuthMutationOptions = UseMutationOptions<TData, TError, TVariables, TContext>;

const useAuthMutation = (
  mutationFn: MutationFunction<TData, TVariables>,
  options?: AuthMutationOptions | undefined,
) => {
  const mutation = useMutation<TData, TError, TVariables, TContext>(mutationFn, options);

  return mutation;
};

export default useAuthMutation;
