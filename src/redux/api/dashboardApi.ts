import type { IDashboardResponse } from "../../types/dashboard";
import { baseApi } from "./baseApi";


export const dashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDashboard: builder.query<IDashboardResponse, void>({
      query: () => ({
        url: "/dashboard",
        method: "GET",
      }),

      providesTags: ["Dashboard"],
    }),
  }),
});

export const {
  useGetDashboardQuery,
} = dashboardApi;