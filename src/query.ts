/* eslint-disable @typescript-eslint/no-explicit-any */
import { MutationCache, QueryCache, QueryClient } from 'react-query'
import { handleErrors } from './services/handleErrors/handleError'

export * from 'react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      retry: false,
    },
  },
  queryCache: new QueryCache({
    onError: async (error: any) => {
      await handleErrors(error)
    },
  }),
  mutationCache: new MutationCache({
    onError: async (error: any) => {
      await handleErrors(error)
    },
  }),
})
