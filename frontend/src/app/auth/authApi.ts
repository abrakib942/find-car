import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signupUser: builder.mutation({
      query: (data: { name: string; email: string; password: string }) => {
        return {
          url: "/api/user/signup",
          method: "POST",
          body: data,
        };
      },
    }),
    loginUser: builder.mutation({
      query: (data) => {
        return {
          url: "/api/user/login",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useLoginUserMutation, useSignupUserMutation } = authApi;
