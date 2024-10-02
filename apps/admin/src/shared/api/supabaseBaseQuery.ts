import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { supabase } from "@repo/core";
import logger from "@repo/core/src/utility/logger";
import { PostgrestError } from "@supabase/supabase-js";

// Define a generic structure for the operations
type SupabaseOperation = "select" | "insert" | "update" | "delete" | "upsert";

// Define the params structure for the query
export interface QueryParams {
  start?: number;
  end?: number;
  filter?: Record<string, any>;
  sortBy?: string | { column: string; nullsFirst?: boolean }[];
  sortOrder?: "asc" | "desc";
  data?: any;
  id?: string | number;
  columns?: string;
  foreignTable?: string;
//   count?: "exact" | "planned" | "estimated";
}

// Helper function to apply filters
const applyFilters = (query: any, filters: Record<string, any>) => {
  for (const [key, value] of Object.entries(filters)) {
    if (Array.isArray(value)) {
      query = query.in(key, value);
    } else if (typeof value === "object" && value !== null) {
      const entry = Object.entries(value)[0];
      if (entry) {
        const [op, val] = entry;
        switch (op) {
          case "gt":
            query = query.gt(key, val);
            break;
          case "gte":
            query = query.gte(key, val);
            break;
          case "lt":
            query = query.lt(key, val);
            break;
          case "lte":
            query = query.lte(key, val);
            break;
          case "neq":
            query = query.neq(key, val);
            break;
          case "like":
            query = query.like(key, val);
            break;
          case "ilike":
            query = query.ilike(key, val);
            break;
          default:
            query = query.eq(key, val);
        }
      }
    } else {
      query = query.eq(key, value);
    }
  }
  return query;
};

// Base query to handle dynamic operations
export const supabaseBaseQuery: BaseQueryFn<
  { table: string; operation: SupabaseOperation; params?: QueryParams },
  any,
  PostgrestError
> = async ({ table, operation, params }) => {
  logger.info("params", params);
  let query: any = supabase.from(table);

  try {
    switch (operation) {
      case "select":
        query = query.select(params?.columns || "*",);

        if (params?.foreignTable) {
          query = query.select(params?.columns || "*", {
            foreignTable: params.foreignTable,
          });
        }

        if (params?.id) {
          return await query.eq("id", params.id).single();
        }

        if (params?.filter) {
          query = applyFilters(query, params.filter);
        }

        if (params?.sortBy) {
          if (Array.isArray(params.sortBy)) {
            query = query.order(params.sortBy);
          } else {
            query = query.order(params.sortBy, {
              ascending: params.sortOrder === "asc",
            });
          }
        }

        if (
          typeof params?.start === "number" &&
          typeof params?.end === "number"
        ) {
          query = query.range(params.start, params.end);
        }

        return await query;

      case "insert":
        if (!params?.data)
          throw new Error("Insert operation requires 'data' in params");
        return await query.insert(params.data);

      case "upsert":
        if (!params?.data)
          throw new Error("Upsert operation requires 'data' in params");
        return await query.upsert(params.data);

      case "update":
        if (!params?.data)
          throw new Error("Update operation requires 'data' in params");
        query = query.update(params.data);
        if (params?.id) {
          query = query.eq("id", params.id);
        } else if (params?.filter) {
          query = applyFilters(query, params.filter);
        } else {
          throw new Error(
            "Update operation requires either 'id' or 'filter' in params"
          );
        }
        return await query;

      case "delete":
        if (params?.id) {
          query = query.eq("id", params.id);
        } else if (params?.filter) {
          query = applyFilters(query, params.filter);
        } else {
          throw new Error(
            "Delete operation requires either 'id' or 'filter' in params"
          );
        }
        return await query.delete();

      default:
        throw new Error(`Unknown operation: ${operation}`);
    }
  } catch (error) {
    return { error: error as PostgrestError };
  }
};
