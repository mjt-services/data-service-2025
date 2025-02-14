import { isUndefined, isDefined } from "@mjt-engine/object";
import type { ObjectStore } from "@mjt-services/data-common-2025";
import { getObjectStoreData } from "../file/getObjectStoreData";


export const projectionToObjects = async (
  projection: unknown,
  objectStore?: ObjectStore
) => {
  if (isUndefined(objectStore)) {
    return projection;
  }
  if (!Array.isArray(projection)) {
    throw new Error("projection must be an array of IDs");
  }
  const dataMap = await getObjectStoreData(objectStore);
  return projection.map((id) => dataMap[id]).filter(isDefined);
};
