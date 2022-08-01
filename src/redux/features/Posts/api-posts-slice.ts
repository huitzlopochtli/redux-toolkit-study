import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const API_KEY = "API_KEY";

export interface PostType {
  id: string;
  userId: string;
  title: string;
  body: string;
}

export const apiPostsSlice = createApi({
  reducerPath: "api/posts",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
    prepareHeaders(headers) {
      //   headers.set("x-api-key", API_KEY);
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchPosts: builder.query<PostType[], void | null>({
        query() {
          return `/posts`;
        },
      }),
    };
  },
});

export const { useFetchPostsQuery } = apiPostsSlice;

const apiPostsReducer = apiPostsSlice.reducer;
export default apiPostsReducer;
