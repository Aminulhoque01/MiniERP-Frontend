import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: `https://mini-erp-backend-delta.vercel.app/api`,

  prepareHeaders: (headers) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",

  baseQuery,

  tagTypes: ["Auth", "Product", "Sale", "Dashboard"],

  endpoints: () => ({}),
});