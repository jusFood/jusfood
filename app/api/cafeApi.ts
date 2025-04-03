import { BASE_URL } from "@env";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CafeResponse } from "../types/api/cafe";

export const cafeApi = createApi({
  reducerPath: "cafeApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllCafeInfos: builder.query<CafeResponse, void>({
      query: () => ({
        url: "/jusfood/cafe/api/cafe-locations",
      }),
    }),
  }),
});

export const { useGetAllCafeInfosQuery } = cafeApi;
