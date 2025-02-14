import { isDefined } from "@mjt-engine/object";
import type { FromUnknownDataQuery } from "@mjt-services/data-common-2025";
import { dataAndQueryToProjection } from "./dataAndQueryToProjection";
import { projectionToObjects } from "./projectionToObjects";


export const fromUnknownDataQueryToResults = (
  dataQuery: FromUnknownDataQuery
): unknown => {
  const { from, query, to, next } = dataQuery;
  const projection = dataAndQueryToProjection(from, query);
  const transform = projectionToObjects(projection, to);
  if (isDefined(next)) {
    return fromUnknownDataQueryToResults({
      ...next,
      from: transform,
    });
  }
  return transform;
};
