import type { IProductResponse } from "../../types/product";
import { baseApi } from "./baseApi";
 

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<
      IProductResponse,
      { page?: number; limit?: number; searchTerm?: string }
    >({
      query: ({ page = 1, limit = 10, searchTerm = "" }) => ({
        url: "/products",
        params: {
          page,
          limit,
          searchTerm,
        },
      }),

      providesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
} = productApi;