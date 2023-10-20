import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_BASE_URL} from '../../constants';

export const categoriesApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({baseUrl: API_BASE_URL}),

  endpoints: builder => ({
    getCategories: builder.query({
      query: () => ({
        url: 'getCategories',
      }),
    }),
  }),
});

export const {useGetCategoriesQuery} = categoriesApi;
