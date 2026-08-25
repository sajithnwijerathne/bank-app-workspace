import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const bankApi = createApi({
  reducerPath: 'bankApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  endpoints: builder => ({
    getUsers: builder.query<Record<string, unknown>[], void>({
      query: () => `users`,
    }),
    // We can add mock endpoints like getTransactions, getBalance here
  }),
});

export const {useGetUsersQuery} = bankApi;
