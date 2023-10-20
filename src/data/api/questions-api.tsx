import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_BASE_URL} from '../../constants';

export const questionsApi = createApi({
  reducerPath: 'questionsApi',
  baseQuery: fetchBaseQuery({baseUrl: API_BASE_URL}),

  endpoints: builder => ({
    getQuestions: builder.query({
      query: () => ({
        url: 'getQuestions',
      }),
    }),
  }),
});

export const {useGetQuestionsQuery} = questionsApi;
