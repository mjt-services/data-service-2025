import { isUndefined } from "@mjt-engine/object";
import { search } from "jmespath";


export const dataAndQueryToProjection = (data: unknown, query?: string) => {
  if (isUndefined(query)) {
    return data;
  }
  return search(data, query);
};
