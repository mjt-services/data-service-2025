import { isDefined, toMany } from "@mjt-engine/object";
import { type FromObjectStoreDataQuery, type ObjectStore, Ids } from "@mjt-services/data-common-2025";


export const queryToObjectStores = (
  query: string | string[] | FromObjectStoreDataQuery
): ObjectStore[] => {
  if (typeof query === "string") {
    return [Ids.toObjectStore(query)].filter(isDefined);
  }
  if (Array.isArray(query)) {
    return query.map((q) => Ids.toObjectStore(q)).filter(isDefined);
  }
  return toMany(query.from);
};
