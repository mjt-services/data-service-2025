import { isDefined } from "@mjt-engine/object";
import type { FromObjectStoreDataQuery } from "@mjt-services/data-common-2025";
import { dataAndQueryToProjection } from "./dataAndQueryToProjection";
import { fromUnknownDataQueryToResults } from "./fromUnknownDataQueryToResults";
import { objectStoresToData } from "./objectStoresToData";
import { projectionToObjects } from "./projectionToObjects";

export const fromObjectStoreDataQueryToResults = async (
  dataQuery: FromObjectStoreDataQuery
) => {
  const { from, query, to, next } = dataQuery;
  const data = await objectStoresToData(from);
  const projection = dataAndQueryToProjection(data, query);
  const transform = projectionToObjects(projection, to);
  if (isDefined(next)) {
    return fromUnknownDataQueryToResults({
      ...next,
      from: transform,
    });
  }
  return transform;
};
