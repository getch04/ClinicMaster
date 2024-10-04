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
    getHeroSections: builder.query<HeroSection[], void>({
      query: () => ({
        table: 'hero_sections',
        operation: 'select',
      }),
      providesTags: ['HeroSection'],
    }),
    addHeroSection: builder.mutation<HeroSection, Omit<HeroSection, 'id'>>({
      query: (heroSection) => ({
        table: 'hero_sections',
        operation: 'insert',
        params: { data: heroSection },
      }),
      invalidatesTags: ['HeroSection'],
    }),
    updateHeroSection: builder.mutation<HeroSection, HeroSection>({
      query: (heroSection) => ({
        table: 'hero_sections',
        operation: 'update',
        params: { id: heroSection.id, data: heroSection },
      }),
      invalidatesTags: ['HeroSection'],
    }),
    deleteHeroSection: builder.mutation<void, string>({
      query: (id) => ({
        table: 'hero_sections',
        operation: 'delete',
        params: { id },
      }),
      invalidatesTags: ['HeroSection'],
    }),
  }),
});

export const {
  useGetHeroSectionsQuery,
  useAddHeroSectionMutation,
  useUpdateHeroSectionMutation,
  useDeleteHeroSectionMutation,
} = apiSlice;

