import type { FromObjectStoreDataQuery } from "@mjt-services/data-common-2025";
import { fromObjectStoreDataQueryToResults } from "./fromObjectStoreDataQueryToResults";


export const queryToKeys = async (
  query: string | string[] | FromObjectStoreDataQuery
) => {
  if (typeof query === "string") {
    return [query];
  }
  if (Array.isArray(query)) {
    return query;
  }
  const keysMaybe = await fromObjectStoreDataQueryToResults(query);
  if (typeof keysMaybe === "string") {
    return [keysMaybe];
  }
  if (Array.isArray(keysMaybe)) {
    return keysMaybe;
  }
  throw new Error("Invalid query. MUST return an ID or an array of IDs");
};
