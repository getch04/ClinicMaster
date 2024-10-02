import { createApi } from "@reduxjs/toolkit/query/react";
import { HeroSection } from "../models/heroSection";
import { QueryParams, supabaseBaseQuery } from "./supabaseBaseQuery";

// Define query parameter types
export interface GetHeroSectionsParams extends QueryParams {
  start?: number;
  end?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  filter?: Record<string, any>;
}

// API slice with CRUD operations, pagination, sorting, and filtering
export const apiSlice = createApi({
  reducerPath: "apiApp1",
  baseQuery: supabaseBaseQuery,
  tagTypes: ["HeroSection"],
  endpoints: (builder) => ({
    getHeroSections: builder.query<HeroSection, GetHeroSectionsParams>({
      query: ({ start, end, sortBy, sortOrder, filter }) => ({
        table: "hero_sections",
        operation: "select",
        params: {
          start,
          end,
          sortBy,
          sortOrder,
          filter,
          count: "exact",
        },
      }),
    }),
  }),
});

// Export hooks for the queries and mutations
export const { useGetHeroSectionsQuery } = apiSlice;

