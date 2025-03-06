import type { ObjectStore } from "@mjt-services/data-common-2025";
import type { DataMap } from "../type/DataMap";
import { objectStoreToFilePath } from "./objectStoreToFilePath";
import { DATA_MAP_CACHE, DIRTY_DATA_MAP_CACHE } from "./DATA_MAP_CACHE";

export const writeObjectStoreData = (
  objectStore: ObjectStore,
  data: DataMap
) => {
  const filePath = objectStoreToFilePath(objectStore);
  DATA_MAP_CACHE.set(filePath, Promise.resolve(data));
  DIRTY_DATA_MAP_CACHE.set(filePath, true);
};


